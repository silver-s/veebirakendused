package model;

import java.util.Calendar;

public class kandidaat {

	String nimi;
	int vanus;
	String erakond;
	String amet;
	String piirkond;
	
	
	public kandidaat(String nimi, String vanus, String erakond, String amet,
			String piirkond) {
		super();
		this.nimi = nimi;
		this.erakond = erakond;
		this.amet = amet;
		this.piirkond = piirkond;
		this.vanus = getAge(vanus.substring(0, 4), vanus.substring(5, 7), vanus.substring(8, 10));
	}
	
	private int getAge(String year, String month, String day)  { 
		Calendar calDOB = Calendar.getInstance();  
		calDOB.set( Integer.parseInt(year), Integer.parseInt(month), Integer.parseInt(day) );   
		Calendar calNow = Calendar.getInstance();  
		calNow.setTime(new java.util.Date());   
		int ageYr = (calNow.get(Calendar.YEAR) - calDOB.get(Calendar.YEAR));  
		int ageMo = (calNow.get(Calendar.MONTH) - calDOB.get(Calendar.MONTH));  
		if (ageMo < 0)  {  ageYr--;  }  
		return ageYr;  
	} 
	
}
