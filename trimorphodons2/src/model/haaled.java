package model;

public class haaled {

	String kedamida;
	int hulk;
	double protsent;
	
	
	public haaled(String kedamida, int hulk, int kokku) {
		super();
		this.kedamida = kedamida;
		this.hulk = hulk;
		this.protsent = Math.round(((double)hulk)/((double)kokku)*100.0);
	}
	
	
}
