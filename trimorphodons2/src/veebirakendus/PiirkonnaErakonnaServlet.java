package veebirakendus;

import com.google.appengine.api.rdbms.AppEngineDriver;
import java.io.IOException;
import java.io.PrintWriter;

import java.sql.*;
import java.util.ArrayList;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.haaled;

public class PiirkonnaErakonnaServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	public void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		
		PrintWriter out = resp.getWriter();
		resp.setContentType("application/json; charset=utf-8");
		Connection c = null;
		String piirk = req.getParameter("id");
		int foo = Integer.parseInt(piirk);
		
		try {
			DriverManager.registerDriver(new AppEngineDriver());
			c = DriverManager.getConnection("jdbc:google:rdbms://trmrphdn:veebirakendused/andmebaas");
			Statement statement = c.createStatement();
			ResultSet result = statement.executeQuery("SELECT tabel.erakond " +
					",COUNT(tabel.erakond) as haali, (SELECT COUNT(piirkonna_id) " +
					"FROM haaletaja WHERE piirkonna_id = "+foo+") as kokku FROM " +
					"(SELECT erakond.nimi as erakond FROM erakond, haaletaja, " +
					"kandidaat WHERE haaletaja.valitu_id = kandidaat.id AND  " +
					"haaletaja.piirkonna_id = "+foo+" AND kandidaat.erakonna_id = erakond.id)" +
					" AS tabel GROUP BY erakond ORDER BY haali DESC;");
			
			Gson gson = new GsonBuilder().setPrettyPrinting().create();
			ArrayList<haaled> list = new ArrayList<haaled> ();
			
			while (result.next()) {
				haaled a = new haaled(result.getString(1),
						result.getInt(2),result.getInt(3));
				list.add(a);
				}
			String haaled = gson.toJson(list);
			out.println("{\"Haaled\":"+haaled+"}");
			result.close();
			statement.close();
			c.close();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
}
