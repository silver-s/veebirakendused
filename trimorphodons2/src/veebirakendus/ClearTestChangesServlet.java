package veebirakendus;

import com.google.appengine.api.rdbms.AppEngineDriver;
import java.io.IOException;
import java.sql.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.*;


public class ClearTestChangesServlet extends HttpServlet {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		System.out.println("Clearing changes");
		Connection c = null;
		try {

			DriverManager.registerDriver(new AppEngineDriver());
			c = DriverManager.getConnection("jdbc:google:rdbms://trmrphdn:veebirakendus/andmebaas");
			String statement = "delete from kandidaat where nimi = 'Tandi Kaat'";
			PreparedStatement stmt = c.prepareStatement(statement);
			stmt.executeUpdate();

	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	    
	}
	
		
	
}
