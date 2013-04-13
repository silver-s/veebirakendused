package veebirakendus;

import java.io.IOException;

import com.google.appengine.api.channel.ChannelService;
import com.google.appengine.api.channel.ChannelServiceFactory;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

import java.io.FileReader;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.CharBuffer;

import javax.jdo.PersistenceManager;
import javax.servlet.http.*;

public class ReaalajasStatistikaServlet extends HttpServlet {
	
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
	    String userId = req.getParameter("klientID");

	    ChannelService channelService = ChannelServiceFactory.getChannelService();
	    String token = channelService.createChannel(userId);


	  }


}
