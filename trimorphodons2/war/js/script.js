$(document).ready(function(){
 $("#valima1").click(function(){
	 var loader = document.getElementById("sisu");
	 var divs = loader.getElementsByClassName('sisu_a');
	 for(var i=0; i<divs.length; i++) {
		
		        divs[i].style.display="none";
			
	 }

	 document.getElementById("valima").style.display="block";
 });

 $("#kandidaadid1").click(function(){
	 var loader = document.getElementById("sisu");
	 var divs = loader.getElementsByClassName('sisu_a');
	 for(var i=0; i<divs.length; i++) {
		
		        divs[i].style.display="none";
			
	 }

	 document.getElementById("kandidaadid").style.display="block";
 });
 $("#avaleht1").click(function(){
	 var loader = document.getElementById("sisu");
	 var divs = loader.getElementsByClassName('sisu_a');
	 for(var i=0; i<divs.length; i++) {
		
	        divs[i].style.display="none";
		
	 }

	 document.getElementById("pealeht").style.display="block";
 });
 $("#tulemused1").click(function(){
	 var loader = document.getElementById("sisu");
	 var divs = loader.getElementsByClassName('sisu_a');
	 for(var i=0; i<divs.length; i++) {
		
		        divs[i].style.display="none";
			 
	 }

	 document.getElementById("tulemused").style.display="block";
 });
 $("#kandideerijale1").click(function(){
	 var loader = document.getElementById("sisu");
	 var divs = loader.getElementsByClassName('sisu_a');
	 for(var i=0; i<divs.length; i++) {
		
		        divs[i].style.display="none";
			
	 }

	 document.getElementById("kandideerima").style.display="block";
 });
});


function valimaSisenen() {
	var loader = document.getElementById("sisu");
	 var divs = loader.getElementsByClassName('sisu_a');
	 for(var i=0; i<divs.length; i++) {
		
		        divs[i].style.display="none";
			 
	 }

	 document.getElementById("valijaTuvastus").style.display="block";
};
 
function valimaEdasi() {
	var loader = document.getElementById("sisu");
	 var divs = loader.getElementsByClassName('sisu_a');
	 for(var i=0; i<divs.length; i++) {
		
		        divs[i].style.display="none";
			 
	 }

	 document.getElementById("valijaKinnitus").style.display="block";
};

function valimaKatkestan() {
	var loader = document.getElementById("sisu");
	 var divs = loader.getElementsByClassName('sisu_a');
	 for(var i=0; i<divs.length; i++) {
		
		        divs[i].style.display="none";
			 
	 }

	 document.getElementById("valijaTuvastus").style.display="block";
};

function valimaKinnitan() {
	var loader = document.getElementById("sisu");
	 var divs = loader.getElementsByClassName('sisu_a');
	 for(var i=0; i<divs.length; i++) {
		
		        divs[i].style.display="none";
			 
	 }

	 document.getElementById("valijaT2namine").style.display="block";
};

function kandideerijaSisenen() {
	var loader = document.getElementById("sisu");
	 var divs = loader.getElementsByClassName('sisu_a');
	 for(var i=0; i<divs.length; i++) {
		
		        divs[i].style.display="none";
			 
	 }

	 document.getElementById("kandideerijaTuvastatud").style.display="block";
};

function lisaKandidatuur() {
	var loader = document.getElementById("sisu");
	 var divs = loader.getElementsByClassName('sisu_a');
	 for(var i=0; i<divs.length; i++) {
		
		        divs[i].style.display="none";
			 
	 }

	 document.getElementById("kandideeri").style.display="block";
};

function kandideeriEdasi() {
	var loader = document.getElementById("sisu");
	 var divs = loader.getElementsByClassName('sisu_a');
	 for(var i=0; i<divs.length; i++) {
		
		        divs[i].style.display="none";
			 
	 }

	 document.getElementById("kandideerijaKinnitatud").style.display="block";
};

function kandideeriKatkestan() {
	var loader = document.getElementById("sisu");
	 var divs = loader.getElementsByClassName('sisu_a');
	 for(var i=0; i<divs.length; i++) {
		
		        divs[i].style.display="none";
			 
	 }

	 document.getElementById("kandideerijaTuvastatud").style.display="block";
};


/////////////////////////////
///      H��letamine      ///
///////////////////////////// 

function haaleta()
 {
 if( document.haaletajaValik.kandidaadiNimi.value == "Vali Kandidaat" )
 {
 alert("Vali kandidaat");
 }
else
 {
 $.post("Haaleta", $("#kandidaadiNimi").serialize());
 
 var loader = document.getElementById("sisu");
 var divs = loader.getElementsByClassName('sisu_a');
 for(var i=0; i<divs.length; i++) {
	divs[i].style.display="none";
 }
 document.getElementById("valijaT2namine").style.display="block";
 }

}



/////////////////////////////
/// Ankeedi valideerimine ///
/////////////////////////////

function valideeriAnkeet()
{

var ankeetVigane=new Boolean();


if( document.kandidaadiAnkeet.Piirkond.value == "piirkond" )
 {
 kandidaadiAnkeet.Piirkond.className="ankeetVigane";
 document.getElementById('piirkondValitud').innerHTML = "";
 document.getElementById('piirkondPuudu').innerHTML = "&#x2717; Valige piirkond";
 ankeetVigane=true;
 //return false;
 }
else
 {
 kandidaadiAnkeet.Piirkond.className="ankeetKorras";
 document.getElementById('piirkondValitud').innerHTML = "&#x2713;";
 document.getElementById('piirkondPuudu').innerHTML = "";
 }



if( document.kandidaadiAnkeet.Erakond.value == "kuuluvus" )
 {
 kandidaadiAnkeet.Erakond.className="ankeetVigane";
 document.getElementById('erakondValitud').innerHTML = "";
 document.getElementById('erakondPuudu').innerHTML = "&#x2717; Valige erakond";
 ankeetVigane=true;
 //return false;
 }
else
 {
 kandidaadiAnkeet.Erakond.className="ankeetKorras";
 document.getElementById('erakondValitud').innerHTML = "&#x2713;";
 document.getElementById('erakondPuudu').innerHTML = "";
 }

/*

var atpos=x.indexOf("@");
var dotpos=x.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
*/

var x=document.forms["kandidaadiAnkeet"]["meil"].value;
var reg = /(\d{4})-(\d{2})-(\d{2})/;;
if (x.match(reg))
 {
 kandidaadiAnkeet.meil.className="ankeetKorras";
 document.getElementById('emailKorras').innerHTML = "&#x2713;";
 document.getElementById('emailPuudu').innerHTML = "";
 }
else
 {
 kandidaadiAnkeet.meil.className="ankeetVigane";
 document.getElementById('emailKorras').innerHTML = "";
 document.getElementById('emailPuudu').innerHTML = "&#x2717; Sisestage e-maili aadress";
 ankeetVigane=true;
 }
 
 
 
//if( document.kandidaadiAnkeet.telefon.value == "" || isNaN( document.kandidaadiAnkeet.telefon.value ) || document.kandidaadiAnkeet.telefon.value.length < 6 )
if( document.kandidaadiAnkeet.telefon.value.length < 3 )
 {
 kandidaadiAnkeet.telefon.className="ankeetVigane";
 document.getElementById('telefonKorras').innerHTML = "";
 document.getElementById('telefonPuudu').innerHTML = "&#x2717; Sisestage amet";
 ankeetVigane=true;
 }  
else 
 {
 kandidaadiAnkeet.telefon.className="ankeetKorras";
 document.getElementById('telefonKorras').innerHTML = "&#x2713;";
 document.getElementById('telefonPuudu').innerHTML = "";
 }


if( document.kandidaadiAnkeet.nimi.value.length < 3 )
 {
 kandidaadiAnkeet.nimi.className="ankeetVigane";
 document.getElementById('nimiKorras').innerHTML = "";
 document.getElementById('nimiPuudu').innerHTML = "&#x2717; Sisestage nimi";
 ankeetVigane=true;
 }  
else 
 {
 kandidaadiAnkeet.nimi.className="ankeetKorras";
 document.getElementById('nimiKorras').innerHTML = "&#x2713;";
 document.getElementById('nimiPuudu').innerHTML = "";
 }




if (ankeetVigane==true)
 {
 return false;
 }


$.post("LisaKandidaat", $("#ankeediVorm").serialize());


var loader = document.getElementById("sisu");
var divs = loader.getElementsByClassName('sisu_a');
for(var i=0; i<divs.length; i++) {
	divs[i].style.display="none";

}
document.getElementById("kandideerijaKinnitatud").style.display="block";

}
/// Ankeedi l�pp ///


///////////////////////////////////
/// Kandidaadi otsing (suggest) ///
///////////////////////////////////

$(function() {

/*function log( message ) {
$( "<div>" ).text( message ).prependTo( "#log" );
$( "#log" ).scrollTop( 0 );
}*/

$( "#kandidaadiOtsing" ).autocomplete({
source: "PakuKandidaat",
minLength: 2

/*select: function( event, ui ) {
log( ui.item ?
"Selected: " + ui.item.value + " aka " + ui.item.id :
"Nothing selected, input was " + this.value );
}*/
});
});

/*
$(function() {
var availableTags = [
"Java"
];
$( "#kandidaadiOtsing" ).autocomplete({
source: availableTags
});
});
*/


//kaardi jaoks!!!
function showElement1()
{
	document.getElementById("imagebox1").style.display="block";
	document.getElementById("imagebox2").style.display="none";
	document.getElementById("imagebox3").style.display="none";
}

function showElement2()
{
	document.getElementById("imagebox1").style.display="none";
	document.getElementById("imagebox2").style.display="block";
	document.getElementById("imagebox3").style.display="none";
}

function showElement3()
{
	document.getElementById("imagebox1").style.display="none";
	document.getElementById("imagebox2").style.display="none";
	document.getElementById("imagebox3").style.display="block";
}

//simulatsioon
function vajutanOtsi() {
	$('#tabel tr:gt(0)').remove();	
	$.getJSON("Otsing", $("#kandidaadiOtsinguVorm").serialize(), function(response) {
	 $.each(response.Kandidaadid, function() { 
		 var row = '<tr><td>'+this.nimi+'</td><td>'+this.vanus+'</td><td>'+this.erakond+'</td><td>'+this.amet+'</td><td>'+this.piirkond +'</td><td><a href="img/kandidaat.png"><img class="thumbnail_photo" src="img/kandidaat.png" alt="kandidaat1"></a></td></tr>';
		 $('#tabel').append(row);
	 });
	 
 });
}

	
	/*document.getElementById("kandidaadid").style.display="none";
	document.getElementById("ootusel").style.display="block";
    setTimeout("peidanOtsi()", 3000);
}*/

function peidanOtsi() {
	var loader = document.getElementById("sisu");
	var divs = loader.getElementsByClassName('sisu_a');
	for(var i=0; i<divs.length; i++) {

		divs[i].style.display="none";

	}

	//document.getElementById("ootusel").style.display="none";
	document.getElementById("kandidaadid").style.display="block";  
}

$.getJSON('/Nimekiri',
	function(response) {
	$.each(response.Kandidaadid, function() { 
		var row = '<tr><td>'+this.nimi+'</td><td>'+this.vanus+'</td><td>'+this.erakond+'</td><td>'+this.amet+'</td><td>'+this.piirkond +'</td><td><a href="img/kandidaat.png"><img class="thumbnail_photo" src="img/kandidaat.png" alt="kandidaat1"></a></td></tr>';
		$('#tabel').append(row);
		});
	}
);	
