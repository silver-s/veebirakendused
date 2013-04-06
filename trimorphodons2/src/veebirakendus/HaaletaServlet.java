package veebirakendus;


import com.google.appengine.api.rdbms.AppEngineDriver;
import java.io.IOException;
import java.sql.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.*;


public class HaaletaServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
	public void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		System.out.println("Servlet 'HaaletaServlet' on töös");
		//PrintWriter out = resp.getWriter();
		Connection c = null;
		try {
			DriverManager.registerDriver(new AppEngineDriver());
			c = DriverManager.getConnection("jdbc:google:rdbms://trmrphdn:veebirakendus/andmebaas");

			String kandidaat = "'"+req.getParameter("kandidaadiNimi")+"'";
			System.out.println(kandidaat);
			ResultSet rs = c.createStatement().executeQuery("SELECT id FROM kandidaat where nimi =" + kandidaat );
			rs.next();
			int kandidaadi_id = rs.getInt("id");
			
			System.out.println("kandidaadi id: "+kandidaadi_id);
			String nimi = "'Harald Hamster'";
			String statement = "UPDATE haaletaja SET valitu_id=" + kandidaadi_id + " WHERE nimi =" + nimi;
			
			System.out.println(statement);
			PreparedStatement stmt = c.prepareStatement(statement);
			stmt.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
		}

	}


}
