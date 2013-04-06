package veebirakendus;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.kandidaat;

import com.google.appengine.api.rdbms.AppEngineDriver;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class KandidaadiOtsingServlet extends HttpServlet {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		System.out.println("Servlet 'KandidaadiOtsingServlet' on töös");
		
		Connection c = null;
		try {
			PrintWriter out = resp.getWriter();
			DriverManager.registerDriver(new AppEngineDriver());
			c = DriverManager.getConnection("jdbc:google:rdbms://trmrphdn:veebirakendus/andmebaas");
			
			/*
			if (req.getParameter("otsitavNimi").isEmpty() && req.getParameter("otsitavPiirkond").isEmpty() ) {
				System.out.println("prk ja nimi null");
				
			}*/
			
			
			String qry = "'"+req.getParameter("otsitavNimi")+"%'";
			String prk = "'"+req.getParameter("otsitavPiirkond")+"'";
			String statement = "";
			
			
			if (qry == "'%'" ) {
				statement = "SELECT kandidaat.nimi, kandidaat.sünniaeg, erakond.nimi, kandidaat.töökoht, piirkond.nimi FROM kandidaat, piirkond, erakond WHERE piirkond.nimi = "+ prk +" AND kandidaat.erakonna_id = erakond.id AND kandidaat.piirkonna_id = piirkond.id ";
			}
			
			if (prk == "'null'" || prk == null || req.getParameter("otsitavPiirkond") == null  ) {
				
				statement = "SELECT kandidaat.nimi, kandidaat.sünniaeg, erakond.nimi, kandidaat.töökoht, piirkond.nimi FROM kandidaat, piirkond, erakond WHERE kandidaat.nimi like " + qry + " AND kandidaat.erakonna_id = erakond.id AND kandidaat.piirkonna_id = piirkond.id ";
			} else {
				
				statement = "SELECT kandidaat.nimi, kandidaat.sünniaeg, erakond.nimi, kandidaat.töökoht, piirkond.nimi FROM kandidaat, piirkond, erakond WHERE kandidaat.nimi like " + qry + "AND piirkond.nimi = "+ prk + " AND kandidaat.erakonna_id = erakond.id AND kandidaat.piirkonna_id = piirkond.id ";
			}
						
			ResultSet result = c.createStatement().executeQuery(statement);
			
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
			//statement.close();
			c.close();
			
			
			/*
			resp.setContentType("text/html");
			resp.setHeader("Cache-control", "no-cache, no-store");
			resp.setHeader("Pragma", "no-cache");
			resp.setHeader("Expires", "-1");

			JSONArray arrayObj=new JSONArray();

			while (rs.next()) {
				arrayObj.put(rs.getString("nimi"));
			}

			out.println(arrayObj.toString());
			out.close();
			*/


		} catch (SQLException e) {
			e.printStackTrace();
		}

	}	



}



