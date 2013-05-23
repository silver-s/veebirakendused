package veebirakendus;

import com.google.appengine.api.rdbms.AppEngineDriver;
import java.io.IOException;
import java.sql.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.*;


public class LisaKandidaatServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
	public void doPost(HttpServletRequest req, HttpServletResponse resp)
	  throws IOException {
		System.out.println("Servlet 'LisaKandidaatServlet' on töös");
		//PrintWriter out = resp.getWriter();
		Connection c = null;
	    try {
	      DriverManager.registerDriver(new AppEngineDriver());
	      c = DriverManager.getConnection("jdbc:google:rdbms://trmrphdn:veebirakendused/andmebaas");
	      String nimi = "'" + req.getParameter("nimi") + "'";
	      String erakond = req.getParameter("Erakond");
	      String piirkond = req.getParameter("Piirkond");
	      String töökoht = "'" + req.getParameter("telefon") + "'";
	      if (töökoht.contains("<") || nimi.contains("<") ) {
	    	  System.out.println("Nice try");
	    	  return;
	      }
	      String sünd = "'" + req.getParameter("meil") + "'";
	      
	      String statement = "INSERT INTO kandidaat ( nimi , töökoht, sünniaeg, erakonna_id , piirkonna_id ) VALUES ( " + nimi + ", " + töökoht + ", " + sünd + ", " + erakond + ", " + piirkond + " )";
	      System.out.println(statement);
	      PreparedStatement stmt = c.prepareStatement(statement);
	      stmt.executeUpdate();
	     
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	    
	  }

	
}
