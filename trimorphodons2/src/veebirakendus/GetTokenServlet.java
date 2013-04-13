package veebirakendus;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.channel.ChannelService;
import com.google.appengine.api.channel.ChannelServiceFactory;
import com.google.appengine.api.rdbms.AppEngineDriver;

public class GetTokenServlet extends HttpServlet {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		System.out.println("GetTokenServlet töötab");
	    PrintWriter out = resp.getWriter();
	    String userId = req.getParameter("kliendiID");
	    System.out.println("userId: "+userId);
	    ChannelService channelService = ChannelServiceFactory.getChannelService();
	    String token = channelService.createChannel(userId);
	    out.println(token);
	    
	    Connection c = null;
	    try {
	      DriverManager.registerDriver(new AppEngineDriver());
	      c = DriverManager.getConnection("jdbc:google:rdbms://trmrphdn:veebirakendus/andmebaas");
	      String statement = "INSERT INTO client ( clientID ) VALUES ( " + userId + " )";
	      System.out.println(statement);
	      PreparedStatement stmt = c.prepareStatement(statement);
	      stmt.executeUpdate();
	     
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	    
	    
	  }


}
