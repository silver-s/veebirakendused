package veebirakendus;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;

import com.google.appengine.api.rdbms.AppEngineDriver;
import com.google.gson.Gson;
 
@SuppressWarnings("serial")
public class LoginServlet extends HttpServlet {
	 public void doGet(HttpServletRequest req, HttpServletResponse resp)
             throws IOException {
       String kood = req.getParameter("code");
       //System.out.println(kood);

       String token = null;
       try {
    	   String g = "https://graph.facebook.com/oauth/access_token?client_id=354733337962261&redirect_uri=" + URLEncoder.encode("http://trimorphodons.appspot.com/login", "UTF-8") + "&client_secret=d9eddfbfd0c379b5c1e8580d55b8430f&code=" + kood;
    	   URL u = new URL(g);
    	   URLConnection c = u.openConnection();
    	   BufferedReader in = new BufferedReader(new InputStreamReader(c.getInputStream()));
    	   String inputLine;
    	   StringBuffer b = new StringBuffer();
    	   while ((inputLine = in.readLine()) != null)
    		   b.append(inputLine + "\n");            
    	   in.close();
    	   token = b.toString();
    	   if (token.startsWith("{"))
    		   throw new Exception("error on requesting token: " + token + " with code: " + kood);
       } catch (Exception e) {
    	   // an error occurred, handle this
       }

       String graph = null;
       try {
    	   String g = "https://graph.facebook.com/me?" + token;
    	   URL u = new URL(g);
    	   URLConnection c = u.openConnection();
    	   BufferedReader in = new BufferedReader(new InputStreamReader(c.getInputStream()));
    	   String inputLine;
    	   StringBuffer b = new StringBuffer();
    	   while ((inputLine = in.readLine()) != null)
    		   b.append(inputLine + "\n");            
    	   in.close();
    	   graph = b.toString();
       } catch (Exception e) {
    	   // an error occurred, handle this
       }

       String facebookId;
       String firstName;
       String middleNames;
       String lastName;

       //try {

       JSONObject json = new JSONObject(graph);

       facebookId = json.getString("id");

       firstName = json.getString("first_name");

       if (json.has("middle_name"))

    	   middleNames = json.getString("middle_name");

       else

    	   middleNames = null;

       if (middleNames != null && middleNames.equals(""))

    	   middleNames = null;

       lastName = json.getString("last_name");

       //System.out.println(lastName);
       /*
       } catch (Exception e) {
    	   e.printStackTrace();
       }
        */



       try {
    	   Connection c = null;

    	   DriverManager.registerDriver(new AppEngineDriver());
    	   c = DriverManager.getConnection("jdbc:google:rdbms://trmrphdn:veebirakendus/andmebaas");

    	   String nimi = "'"+firstName + " " + lastName+"'";
    	   String statement = "insert into haaletaja ( nimi ) values (" + nimi +" )";
    	   System.out.println(statement);
    	   PreparedStatement stmt = c.prepareStatement(statement);
    	   stmt.executeUpdate();
    	   System.out.println(nimi);


    	   /*
	      req.getSession().setAttribute("nimi", nimi);
	      resp.sendRedirect("login.html");
    	    */
    	   /*
	      resp.sendRedirect("login.jsp");
	      req.setAttribute("nimi", nimi); 
	      req.getRequestDispatcher("login.jsp").forward(req, resp);
    	    */
       } catch (SQLException e) {
    	   e.printStackTrace();
       }

       String nimi = firstName + " " + lastName;

       req.setAttribute("nimi", nimi); 
       try {
    	   req.getRequestDispatcher("login.jsp").forward(req, resp);
       } catch (ServletException e) {
    	   // TODO Auto-generated catch block
    	   e.printStackTrace();
       }

       /*
       req.getSession().setAttribute("nimi", nimi);
       resp.sendRedirect("login.jsp");
        */




	 }
}