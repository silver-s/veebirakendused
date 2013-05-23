package veebirakendus;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.channel.ChannelMessage;
import com.google.appengine.api.channel.ChannelService;
import com.google.appengine.api.channel.ChannelServiceFactory;
import com.google.appengine.api.rdbms.AppEngineDriver;


public class KandidaadiUuendusServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
	public void doPost(HttpServletRequest req, HttpServletResponse resp)
	  throws IOException {
		System.out.println("Servlet 'KandidaadiUuendusServlet' on töös");
		Connection c = null;
	    try {

	    	DriverManager.registerDriver(new AppEngineDriver());
	    	c = DriverManager.getConnection("jdbc:google:rdbms://trmrphdn:veebirakendused/andmebaas");			

	    	String statement = "SELECT clientID FROM client";
	    	ResultSet result = c.createStatement().executeQuery(statement);

	    	ChannelService channelService = ChannelServiceFactory.getChannelService();

	    	while (result.next()) {
	    		String id = result.getString("clientId");
	    		try {
	    		channelService.sendMessage(new ChannelMessage(id, "update"));
	    		}
	    		catch (Exception e) {
	    		}
	    	}
	    	result.close();
	    	c.close();


		} catch (SQLException e) {
			e.printStackTrace();
		}

	    	
	    	

	    
	  }

	
}
