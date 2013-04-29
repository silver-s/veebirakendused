package com.appspot.trimorphodons.testing;

import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.thoughtworks.selenium.*;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class kandidaadiRegistreerimineTest {
	private Selenium selenium;
	
	///////////////////////////////////////////////////////
	// TESTIDE AJAL KASUTATAV FACEBOOKI E-MAIL JA PAROOL //
	///////////////////////////////////////////////////////
	private String fb_email = "";
	private String fb_parool = "";				
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
		Thread.sleep(20000);
		assertTrue(selenium.isTextPresent("Tandi Kaat"));
	}

	@After
	public void tearDown() throws Exception {
		try {			
			DriverManager.registerDriver(new com.google.cloud.sql.Driver());
			String statement = "delete from kandidaat where nimi = 'Tandi Kaat'";
			PreparedStatement stmt = DriverManager.getConnection("jdbc:google:rdbms://trmrphdn:veebirakendus/andmebaas").prepareStatement(statement);
			stmt.executeUpdate();
		}
		catch (SQLException e) {
        e.printStackTrace();
		}
		
		selenium.stop();
		
	}
		
}
