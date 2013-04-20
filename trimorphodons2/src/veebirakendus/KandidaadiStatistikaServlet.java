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

public class KandidaadiStatistikaServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		
		PrintWriter out = resp.getWriter();
		resp.setContentType("application/json; charset=utf-8");
		Connection c = null;
		
		try {
			DriverManager.registerDriver(new AppEngineDriver());
			c = DriverManager.getConnection("jdbc:google:rdbms://trmrphdn:veebirakendus/andmebaas");
			Statement statement = c.createStatement();
			ResultSet result = statement.executeQuery("SELECT kandidaat.nimi " +
					"as kandidaat, COUNT(valitu_id) AS haali, (SELECT COUNT(haaletaja.valitu_id)  " +
					"FROM haaletaja) FROM kandidaat, haaletaja WHERE " +
					"haaletaja.valitu_id = kandidaat.id GROUP BY kandidaat.nimi;");
	
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
