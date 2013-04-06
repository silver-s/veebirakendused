package veebirakendus;

import com.google.appengine.api.rdbms.AppEngineDriver;
import java.io.IOException;
import java.io.PrintWriter;

import java.sql.*;


import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.haaled;

public class RiigiStServlet extends HttpServlet {

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
			ResultSet result = statement.executeQuery("SELECT COUNT(haaletaja.valitu_id) FROM haaletaja");
			Gson gson = new GsonBuilder().setPrettyPrinting().create();
			result.next();
			haaled seda = new haaled("Eestimaa",result.getInt(1),result.getInt(1));
			
			String haaled = gson.toJson(seda);
			out.println("{\"Haaled\":"+haaled+"}");
			result.close();
			statement.close();
			c.close();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
}
