package com.appspot.trimorphodons.testing;

import com.thoughtworks.selenium.*;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class kandidaadiOtsingTest {
	private Selenium selenium;

	@Before
	public void setUp() throws Exception {
		selenium = new DefaultSelenium("localhost", 4444, "*chrome", "http://trimorphodons.appspot.com/");
		selenium.start();
	}

	@Test
	public void testKandidaadiOtsing() throws Exception {
		selenium.open("/");
		selenium.click("id=kandidaadid1");
		selenium.type("id=kandidaadiOtsing", "ferdinand");
		selenium.click("css=button.btn-search");
		assertTrue(selenium.isTextPresent(""));
	}

	@After
	public void tearDown() throws Exception {
		selenium.stop();
	}
}
