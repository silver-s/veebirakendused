package veebirakendus;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.servlet.http.*;
import com.google.appengine.api.rdbms.AppEngineDriver;
import com.google.appengine.labs.repackaged.org.json.JSONArray;


public class PakuKandidaatServlet extends HttpServlet {
	

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
	  throws IOException {
		System.out.println("Servlet 'PakuKandidaadid' on töös");
		
		Connection c = null;
	    try {
	      PrintWriter out = resp.getWriter();
	      DriverManager.registerDriver(new AppEngineDriver());
	      c = DriverManager.getConnection("jdbc:google:rdbms://trmrphdn:veebirakendused/andmebaas");
	      String qry = "'"+req.getParameter("term")+"%'";
	      ResultSet rs = c.createStatement().executeQuery("SELECT nimi FROM kandidaat where nimi like " + qry);
	      
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
	      
	     
	    } catch (SQLException e) {
	    	e.printStackTrace();
	    	}
	    
	  }	
}
