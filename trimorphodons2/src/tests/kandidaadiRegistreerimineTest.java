package tests;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.thoughtworks.selenium.*;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import veebirakendus.ClearTestChangesServlet;

import static org.junit.Assert.*;

public class kandidaadiRegistreerimineTest {
	private Selenium selenium;
	
	///////////////////////////////////////////////////////
	// TESTIDE AJAL KASUTATAV FACEBOOKI E-MAIL JA PAROOL //
	///////////////////////////////////////////////////////
	private String fb_email = "lafferx@gmail.com";
	private String fb_parool = "testimine";				
	///////////////////////////////////////////////////////

	@Before
	public void setUp() throws Exception {
		selenium = new DefaultSelenium("localhost", 4444, "*chrome", "http://www.trimorphodons.appspot.com/");
		selenium.start();
	}

	@Test
	public void testKandidaadiRegistreerimine() throws Exception {
		selenium.open("/");
		selenium.click("id=valima1");
		selenium.click("css=#valima > div.login > a > #login");
		selenium.waitForPageToLoad("30000");
		selenium.type("id=email", fb_email);
		selenium.type("id=pass", fb_parool);
		selenium.click("id=u_0_1");
		selenium.waitForPageToLoad("30000");
		selenium.click("id=kandideerijale1");
		selenium.click("css=div.kandideeri > form > button.kandideeri-btn");
		selenium.type("name=nimi", "Tandi Kaat");
		selenium.type("name=telefon", "ametnik");
		selenium.select("id=Piirkond", "label=Harjumaa");
		selenium.select("name=Erakond", "label=Roheline");
		selenium.click("css=button.kandideeri-btn");
		selenium.click("id=kandidaadid1");
		//Thread.sleep(20000);
		assertTrue(selenium.isTextPresent("Tandi Kaat"));
	}

	@After
	public void tearDown() throws Exception {
		/*
		Connection c = null;
		try {
			//c = DriverManager.getConnection(url, user, password)
			//DriverManager.registerDriver(new AppEngineDriver());
			
			//DriverManager.registerDriver((Driver) new SimpleDriverDataSource());
			c = DriverManager.getConnection("jdbc:google:rdbms://trmrphdn:veebirakendus/andmebaas", "root", "");


			//String url = "jdbc:google:rdbms://trmrphdn:veebirakendus/andmebaas";

			//c = DriverManager.getConnection(url, "root","");
			String statement = "delete from kandidaat where nimi = 'Tandi Kaat'";
			PreparedStatement stmt = c.prepareStatement(statement);
			stmt.executeUpdate();
		}
		catch (SQLException e) {
        e.printStackTrace();
		}*/
		selenium.stop();
		ClearTestChangesServlet clear =  new ClearTestChangesServlet();
		HttpServletResponse resp = null;
		HttpServletRequest req = null;
		clear.doPost(req, resp);
	
		}
		
}
