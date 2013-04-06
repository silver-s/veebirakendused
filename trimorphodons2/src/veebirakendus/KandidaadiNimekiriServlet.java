package veebirakendus;

import com.google.appengine.api.rdbms.AppEngineDriver;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.*;
import java.sql.*;
import java.util.ArrayList;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.kandidaat;


public class KandidaadiNimekiriServlet extends HttpServlet {
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
			ResultSet result = statement.executeQuery("SELECT kandidaat.nimi, " +
					"kandidaat.sünniaeg, erakond.nimi, " +
					"kandidaat.töökoht, piirkond.nimi "+ 
					"FROM kandidaat, piirkond, erakond " + 
					"WHERE kandidaat.erakonna_id = erakond.id AND " +
					"kandidaat.piirkonna_id = piirkond.id;");
			
			Gson gson = new GsonBuilder().setPrettyPrinting().create();
			ArrayList<kandidaat> list = new ArrayList<kandidaat> ();
			
			while (result.next()) {
				kandidaat can = new kandidaat(result.getString(1),
						result.getString(2),result.getString(3),
						result.getString(4), result.getString(5));
				list.add(can);
				}
			String cand = gson.toJson(list);
			//System.out.println(cand);
			out.println("{\"Kandidaadid\":"+cand+"}");
			result.close();
			statement.close();
			c.close();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
