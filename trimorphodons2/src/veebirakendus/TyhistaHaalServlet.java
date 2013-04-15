package veebirakendus;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.rdbms.AppEngineDriver;

public class TyhistaHaalServlet extends HttpServlet {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		System.out.println("Servlet TyhistaH22lServlet on töös");
		Connection c = null;
		try {
			DriverManager.registerDriver(new AppEngineDriver());
			c = DriverManager.getConnection("jdbc:google:rdbms://trmrphdn:veebirakendus/andmebaas");
			String nimi = "'"+req.getParameter("haaletajaNimi")+"'";
			String statement = "UPDATE haaletaja SET valitu_id = Null WHERE nimi =" + nimi;
			System.out.println(statement);
			PreparedStatement stmt = c.prepareStatement(statement);
			stmt.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		
	}

}
