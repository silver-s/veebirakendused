package com.appspot.trimorphodons.testing;

import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.thoughtworks.selenium.*;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class haaletamineTest {
	private Selenium selenium;
	
	///////////////////////////////////////////////////////
	// TESTIDE AJAL KASUTATAV FACEBOOKI KONTO INFO       //
	///////////////////////////////////////////////////////
	private String fb_email = "";
	private String fb_parool = "";
	private String fb_nimi = "";
	///////////////////////////////////////////////////////
	

	@Before
	public void setUp() throws Exception {
		selenium = new DefaultSelenium("localhost", 4444, "*chrome", "http://www.trimorphodons.appspot.com/");
		selenium.start();
	}

	@Test
	public void testHaaletamine() throws Exception {
		selenium.open("/");
		selenium.click("id=valima1");
		selenium.click("css=#valima > div.login > a > #login");
		selenium.waitForPageToLoad("30000");
		selenium.type("id=email", fb_email);
		selenium.type("id=pass", fb_parool);
		selenium.click("id=persist_box");
		selenium.click("id=u_0_1");
		selenium.waitForPageToLoad("30000");
		selenium.click("id=tulemused1");
		selenium.click("link=Kandidaatide lõikes");
		assertFalse(selenium.isTextPresent("Gerhard Gätegõverdus"));
		selenium.click("id=valima1");
		selenium.select("id=kandidaadiNimi", "label=Gerhard Gätegõverdus");
		selenium.click("id=valimine-edasi-btn");
		selenium.click("id=tulemused1");
		selenium.click("link=Kandidaatide lõikes");
		Thread.sleep(15000);
		assertTrue(selenium.isTextPresent("Gerhard Gätegõverdus"));
	}

	@After
	public void tearDown() throws Exception {
		
		try {			
			DriverManager.registerDriver(new com.google.cloud.sql.Driver());
			String statement = "update haaletaja set valitu_id = NULL where nimi = '" + fb_nimi + "'";
			PreparedStatement stmt = DriverManager.getConnection("jdbc:google:rdbms://trmrphdn:veebirakendus/andmebaas").prepareStatement(statement);
			stmt.executeUpdate();
		}
		catch (SQLException e) {
        e.printStackTrace();
		}		
		
		selenium.stop();
	}
}
