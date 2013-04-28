/*$( document ).ready(function() {
	var stateObj={};
	history.pushState(stateObj, "avaleht", "pealeht");
});*/


window.onload = function() {
 //handleHashOnLoad();
 //navigeeri();
}

/*
window.onpopstate = function(event) {
	var location1 = new String(document.location);
	var location2 = new String("");
	location2 = location1.replace("http://localhost:8888/","");
	if (location2 == "")
	{
		location2.replace("", "pealeht");
		
	}
	//alert("location: " + document.location + ", window location.pathname: " + location2);
	var loader = document.getElementById("sisu");
	var divs = loader.getElementsByClassName('sisu_a');
	for(var i=0; i<divs.length; i++) {
		divs[i].style.display="none";
	}
	document.getElementById(location2).style.display="block";
   
	};*/

/*
function navigeeri() {
	var currentState = history.state;
	alert(currentState);
    var loader = document.getElementById("sisu");
	var divs = loader.getElementsByClassName('sisu_a');
	for(var i=0; i<divs.length; i++) {
		divs[i].style.display="none";
	}
	document.getElementById(currentState).style.display="block";
   
}*/



/*
function handleHashOnLoad() {
    // This method looks for anchor tags, or hashes, in the URL and sets up the tabs appropriately
    var hash = location.hash;
    //alert("hash:"+hash);
    // if we have a hash value from the URL
    if(hash != "") {
        // We need to strip off the "#" which is included in the hash value
        var tabName = hash.substring(1);
        // Now we call the function to setup the correct tab
//        swapTab(tabName);
	var loader = document.getElementById("sisu");
	var divs = loader.getElementsByClassName('sisu_a');
	for(var i=0; i<divs.length; i++) {
		divs[i].style.display="none";
	}

	document.getElementById(tabName).style.display="block";

    }
}*/




$(document).ready(function(){
 $("#valima1").click(function(){
	 var loader = document.getElementById("sisu");
	 var divs = loader.getElementsByClassName('sisu_a');
	 for(var i=0; i<divs.length; i++) {
		
		        divs[i].style.display="none";
			
	 }

	 document.getElementById("valima").style.display="block";
	 //window.location.hash = 'valima';
	 
	 var stateObj = {};
	 history.pushState(stateObj, "valima", "valima");
 });

 $("#kandidaadid1").click(function(){
	 var loader = document.getElementById("sisu");
	 var divs = loader.getElementsByClassName('sisu_a');
	 for(var i=0; i<divs.length; i++) {
		
		        divs[i].style.display="none";
			
	 }

	 document.getElementById("kandidaadid").style.display="block";
	 //window.location.hash = 'kandidaadid';
	 var stateObj = {};
	 history.pushState(stateObj, "kandidaadid", "kandidaadid");

 });
 $("#avaleht1").click(function(){
	 var loader = document.getElementById("sisu");
	 var divs = loader.getElementsByClassName('sisu_a');
	 for(var i=0; i<divs.length; i++) {
		
	        divs[i].style.display="none";
		
	 }

	 document.getElementById("pealeht").style.display="block";
	 //window.location.hash = 'pealeht';
	 /*var stateObj = {};
	 history.pushState(stateObj, "avaleht", "pealeht");*/
	 
 });
 $("#tulemused1").click(function(){
	 var loader = document.getElementById("sisu");
	 var divs = loader.getElementsByClassName('sisu_a');
	 for(var i=0; i<divs.length; i++) {
		
		        divs[i].style.display="none";
			 
	 }

	 document.getElementById("tulemused").style.display="block";
	 //window.location.hash = 'tulemused';
	 var stateObj = {};
	 history.pushState(stateObj, "tulemused", "tulemused");
 });
 $("#kandideerijale1").click(function(){
	 var loader = document.getElementById("sisu");
	 var divs = loader.getElementsByClassName('sisu_a');
	 for(var i=0; i<divs.length; i++) {
		
		        divs[i].style.display="none";
			
	 }

	 document.getElementById("kandideerima").style.display="block";
 	 //window.location.hash = 'kandideerijale';
	 var stateObj = {};
	 history.pushState(stateObj, "", "kandideerima");

 });
});


function valimaSisenen() {
	var loader = document.getElementById("sisu");
	 var divs = loader.getElementsByClassName('sisu_a');
	 for(var i=0; i<divs.length; i++) {
		
		        divs[i].style.display="none";
			 
	 }

	 document.getElementById("valijaTuvastus").style.display="block";
	 window.location.hash = 'valijaTuvastus';


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
 $.post("UuendaKandidaadid");
 
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
 document.getElementById('emailPuudu').innerHTML = "&#x2717; Sisestage sünniaeg";
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
$.post("UuendaKandidaadid");

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



$.ajax({
	type: "GET",
    url: "/Nimekiri",
    dataType : "json",
    success: function (data) {
		if(window.sessionStorage){
			window.localStorage.setItem('nimekiri', JSON.stringify(data));
		}
        $.each(data.Kandidaadid, function() { 
			var row = '<tr><td>'+this.nimi+'</td><td>'+this.vanus+'</td><td>'+this.erakond+'</td><td>'+this.amet+'</td><td>'+this.piirkond +'</td><td><a href="img/kandidaat.png"><img class="thumbnail_photo" src="img/kandidaat.png" alt="kandidaat1"></a></td></tr>';
			$('#tabel').append(row);
		});
    },
	error: function(){
		var data = jQuery.parseJSON(window.localStorage.getItem('nimekiri'));
		$.each(data.Kandidaadid, function() { 
			var row = '<tr><td>'+this.nimi+'</td><td>'+this.vanus+'</td><td>'+this.erakond+'</td><td>'+this.amet+'</td><td>'+this.piirkond +'</td><td><a href="img/kandidaat.png"><img class="thumbnail_photo" src="img/kandidaat.png" alt="kandidaat1"></a></td></tr>';
			$('#tabel').append(row);
		});
    } 
});


/*$.getJSON('/Nimekiri',
	function(response) {
	$.each(response.Kandidaadid, function() { 
		var row = '<tr><td>'+this.nimi+'</td><td>'+this.vanus+'</td><td>'+this.erakond+'</td><td>'+this.amet+'</td><td>'+this.piirkond +'</td><td><a href="img/kandidaat.png"><img class="thumbnail_photo" src="img/kandidaat.png" alt="kandidaat1"></a></td></tr>';
		$('#tabel').append(row);
		});
	}
);	*/

$.ajax({
	type: "GET",
    url: "/PiirkonnadeSt",
    dataType : "json",
    success: function (data) {
		if(window.sessionStorage){
			window.localStorage.setItem('piirkonnad', JSON.stringify(data));
		}
        $.each(data.Haaled, function() { 
			var row = '<tr><td>'+this.kedamida+'</td><td>'+this.hulk+'</td><td>'+this.protsent+'</td></tr>';
			$('#tabelpiirk').append(row);
		});
    },
	error: function(){
		var data = jQuery.parseJSON(window.localStorage.getItem('piirkonnad'));
		$.each(data.Haaled, function() { 
			var row = '<tr><td>'+this.kedamida+'</td><td>'+this.hulk+'</td><td>'+this.protsent+'</td></tr>';
			$('#tabelpiirk').append(row);
		});
    } 
});

/*$.getJSON('/PiirkonnadeSt',
	function(response) {
	if(window.sessionStorage)
	{
		window.localStorage.setItem('piirkonnad', JSON.stringify(response));
	}
	$.each(response.Haaled, function() { 
		var row = '<tr><td>'+this.kedamida+'</td><td>'+this.hulk+'</td><td>'+this.protsent+'</td></tr>';
	$('#tabelpiirk').append(row);
		});
	}
);*/

$.ajax({
	type: "GET",
    url: "/ErakonnadeSt",
    dataType : "json",
    success: function (data) {
		if(window.sessionStorage){
			window.localStorage.setItem('erakonnad', JSON.stringify(data));
		}
        $.each(data.Haaled, function() { 
			var row = '<tr><td>'+this.kedamida+'</td><td>'+this.hulk+'</td><td>'+this.protsent+'</td></tr>';
			$('#tabelerakond').append(row);
		});
    },
	error: function(){
		var data = jQuery.parseJSON(window.localStorage.getItem('erakonnad'));
		$.each(data.Haaled, function() { 
			var row = '<tr><td>'+this.kedamida+'</td><td>'+this.hulk+'</td><td>'+this.protsent+'</td></tr>';
			$('#tabelerakond').append(row);
		});
    } 
});

/*$.getJSON('/ErakonnadeSt',
	function(response) {
	if(window.sessionStorage)
	{
		window.localStorage.setItem('erakonnad', JSON.stringify(response));
	}
	$.each(response.Haaled, function() { 
		var row = '<tr><td>'+this.kedamida+'</td><td>'+this.hulk+'</td><td>'+this.protsent+'</td></tr>';
	$('#tabelerakond').append(row);
		});
	}
);*/

$.ajax({
	type: "GET",
    url: "/KandidaadiSt",
    dataType : "json",
    success: function (data) {
		if(window.sessionStorage){
			window.localStorage.setItem('kandidaadid', JSON.stringify(data));
		}
        $.each(data.Haaled, function() { 
			var row = '<tr><td>'+this.kedamida+'</td><td>'+this.hulk+'</td><td>'+this.protsent+'</td></tr>';
			$('#tabelknd').append(row);
		});
    },
	error: function(){
		var data = jQuery.parseJSON(window.localStorage.getItem('kandidaadid'));
		$.each(data.Haaled, function() { 
			var row = '<tr><td>'+this.kedamida+'</td><td>'+this.hulk+'</td><td>'+this.protsent+'</td></tr>';
			$('#tabelknd').append(row);
		});
    } 
});

/*$.getJSON('/KandidaadiSt',
	function(response) {
	if(window.sessionStorage)
	{
		window.localStorage.setItem('kandidaadid', JSON.stringify(response));
	}
	$.each(response.Haaled, function() { 
		var row = '<tr><td>'+this.kedamida+'</td><td>'+this.hulk+'</td><td>'+this.protsent+'</td></tr>';
	$('#tabelknd').append(row);
		});
	}
);*/

$.ajax({
	type: "GET",
    url: "/RiigiSt",
    dataType : "json",
    success: function (data) {
		if(window.sessionStorage){
			window.localStorage.setItem('riik', JSON.stringify(data));
		}
        $.each(data.Haaled, function() { 
			var row = '<tr><td>'+this.kedamida+'</td><td>'+this.hulk+'</td><td>'+this.protsent+'</td></tr>';
			$('#tabelrg').append(row);
		});
    },
	error: function(){
		var data = jQuery.parseJSON(window.localStorage.getItem('riik'));
		$.each(data.Haaled, function() { 
			var row = '<tr><td>'+this.kedamida+'</td><td>'+this.hulk+'</td><td>'+this.protsent+'</td></tr>';
			$('#tabelrg').append(row);
		});
    } 
});

/*$.getJSON('/RiigiSt',
	function(response) {
	if(window.sessionStorage)
	{
		window.localStorage.setItem('riik', JSON.stringify(response));
	}
	$.each(response.Haaled, function() { 
		var row = '<tr><td>'+this.kedamida+'</td><td>'+this.hulk+'</td><td>'+this.protsent+'</td></tr>';
	$('#tabelrg').append(row);
		});
	}
);*/

///////////////////////
/// Tulemuste leht  ///
///////////////////////
function parteideKaupa() {
	document.getElementById("erakonnaTabel").style.display="block";
	document.getElementById("koguRiigiTabel").style.display="none";
	document.getElementById("kandidaatideTabel").style.display="none";  
	document.getElementById("piirkonnaTabel").style.display="none"; 
    window.location.hash = 'tulemusedParteid';
	}; 

function piirkondadeKaupa() {
	document.getElementById("erakonnaTabel").style.display="none";
	document.getElementById("koguRiigiTabel").style.display="none";
	document.getElementById("kandidaatideTabel").style.display="none";  
	document.getElementById("piirkonnaTabel").style.display="block";
    window.location.hash = 'tulemusedPiirkonnad';

}; 

function kandidaatideKaupa() {
	document.getElementById("erakonnaTabel").style.display="none";
	document.getElementById("piirkonnaTabel").style.display="none";
	document.getElementById("koguRiigiTabel").style.display="none";
	document.getElementById("kandidaatideTabel").style.display="block";
    window.location.hash = 'tulemusedKandidaadid';
}; 

function koguRiik() {
	document.getElementById("erakonnaTabel").style.display="none";
	document.getElementById("piirkonnaTabel").style.display="none";
	document.getElementById("koguRiigiTabel").style.display="block";
	document.getElementById("kandidaatideTabel").style.display="none";
    window.location.hash = 'tulemusedRiik';
}; 
 
function tyhistaHaal() {
	$.post("TyhistaHaal");
	$.post("UuendaKandidaadid");
	alert("Hääl tühistatud");
};

/*function initialize() {
	var Trtm=new google.maps.LatLng(59.9,26.441);
	var mapProp = {
		center:new google.maps.LatLng(59.9,21), zoom:7, mapTypeId:google.maps.MapTypeId.ROADMAP};
	var map=new google.maps.Map(document.getElementById("Kaart"),mapProp);
	map.checkResize()
	
	var marker=new google.maps.Marker({
  position:Trtm,
  });

marker.setMap(map);
};*/



function initialize()
{
var myCenter = new google.maps.LatLng(59.9,21);
var TartumaaLoc = new google.maps.LatLng(58.36611,26.73611);
var HarjumaaLoc = new google.maps.LatLng(59.32389,24.83806);
var ValgamaaLoc = new google.maps.LatLng(58.0,26.14528);
var HiiumaaLoc = new google.maps.LatLng(58.89778,22.64917);
var IdaVirumaaLoc = new google.maps.LatLng(59.19972,27.35472);
var JogevamaaLoc = new google.maps.LatLng(58.74667,26.39389);
var LaanemaaLoc = new google.maps.LatLng(58.94306,23.64139);
var LaaneVirumaaLoc = new google.maps.LatLng(59.14639,26.35556);
var PolvamaaLoc = new google.maps.LatLng(58.06028,27.06917);
var ParnumaaLoc = new google.maps.LatLng(58.47472,24.71083);
var RaplamaaLoc = new google.maps.LatLng(58.90722,24.79278);
var SaaremaaLoc = new google.maps.LatLng(58.34806,22.50389);
var ViljandimaaLoc = new google.maps.LatLng(58.36389,25.59);
var VorumaaLoc = new google.maps.LatLng(57.73389,27.01917);
var JarvamaaLoc = new google.maps.LatLng(58.88556,25.55722);

var mapProp = {
  center:myCenter,
  zoom:7,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("Kaart"),mapProp);

var markerTartumaa=new google.maps.Marker({
  position:TartumaaLoc,
  });
  markerTartumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/pink.png');
  
var markerHarjumaa=new google.maps.Marker({
  position:HarjumaaLoc,
  });
  markerHarjumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/pink.png');
  
var markerValgamaa=new google.maps.Marker({
  position:ValgamaaLoc,
  });
  markerValgamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/pink.png');
  
var markerHiiumaa=new google.maps.Marker({
  position:HiiumaaLoc,
  });
  markerHiiumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/pink.png');

var markerIdaVirumaa=new google.maps.Marker({
  position:IdaVirumaaLoc,
  });
  markerIdaVirumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/pink.png');

var markerJogevamaa=new google.maps.Marker({
  position:JogevamaaLoc,
  });
  markerJogevamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/pink.png');

var markerLaanemaa=new google.maps.Marker({
  position:LaanemaaLoc,
  });
  markerLaanemaa.setIcon('http://maps.google.com/mapfiles/ms/icons/pink.png');

var markerLaaneVirumaa=new google.maps.Marker({
  position:LaaneVirumaaLoc,
  });
  markerLaaneVirumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/pink.png');

var markerPolvamaa=new google.maps.Marker({
  position:PolvamaaLoc,
  });
  markerPolvamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/pink.png');

var markerParnumaa=new google.maps.Marker({
  position:ParnumaaLoc,
  });
  markerParnumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/pink.png');
 
var markerRaplamaa=new google.maps.Marker({
  position:RaplamaaLoc,
  });
  markerRaplamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/pink.png');

var markerSaaremaa=new google.maps.Marker({
  position:SaaremaaLoc,
  });
  markerSaaremaa.setIcon('http://maps.google.com/mapfiles/ms/icons/pink.png');
 
var markerViljandimaa=new google.maps.Marker({
  position:ViljandimaaLoc
  });
  markerViljandimaa.setIcon('http://maps.google.com/mapfiles/ms/icons/pink.png');
   
var markerVorumaa=new google.maps.Marker({
  position:VorumaaLoc
  });
  markerVorumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/pink.png');
  
var markerJarvamaa=new google.maps.Marker({
  position:JarvamaaLoc,
  });
  markerJarvamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/pink.png');

markerTartumaa.setMap(map);
markerHarjumaa.setMap(map);
markerValgamaa.setMap(map);
markerHiiumaa.setMap(map);
markerIdaVirumaa.setMap(map);
markerJogevamaa.setMap(map);
markerLaanemaa.setMap(map);
markerLaaneVirumaa.setMap(map);
markerPolvamaa.setMap(map);
markerParnumaa.setMap(map);
markerRaplamaa.setMap(map);
markerSaaremaa.setMap(map);
markerViljandimaa.setMap(map);
markerVorumaa.setMap(map);
markerJarvamaa.setMap(map);

var infoTartumaa = new google.maps.InfoWindow({
  content:"Tartumaa piirkond"
  });

google.maps.event.addListener(markerTartumaa, 'click', function() {
  infoTartumaa.open(map,markerTartumaa);
  });
    
var infoHarjumaa = new google.maps.InfoWindow({
  content:"Harjumaa piirkond"
  });

google.maps.event.addListener(markerHarjumaa, 'click', function() {
  infoHarjumaa.open(map,markerHarjumaa);
  });
  
var infoValgamaa = new google.maps.InfoWindow({
  content:"Valgamaa piirkond"
  });

google.maps.event.addListener(markerValgamaa, 'click', function() {
  infoValgamaa.open(map,markerValgamaa);
  });

var infoHiiumaa = new google.maps.InfoWindow({
  content:"Hiiumaa piirkond"
  });

google.maps.event.addListener(markerHiiumaa, 'click', function() {
  infoHiiumaa.open(map,markerHiiumaa);
  });

var infoIdaVirumaa = new google.maps.InfoWindow({
  content:"Ida-Virumaa piirkond"
  });

google.maps.event.addListener(markerIdaVirumaa, 'click', function() {
  infoIdaVirumaa.open(map,markerIdaVirumaa);
  });
 
var infoJogevamaa = new google.maps.InfoWindow({
  content:"Jõgevamaa piirkond"
  });

google.maps.event.addListener(markerJogevamaa, 'click', function() {
  infoJogevamaa.open(map,markerJogevamaa);
  });

var infoLaanemaa = new google.maps.InfoWindow({
  content:"Läänemaa piirkond"
  });

google.maps.event.addListener(markerLaanemaa, 'click', function() {
  infoLaanemaa.open(map,markerLaanemaa);
  });
  
var infoLaaneVirumaa = new google.maps.InfoWindow({
  content:"Lääne-Virumaa piirkond"
  });

google.maps.event.addListener(markerLaaneVirumaa, 'click', function() {
  infoLaaneVirumaa.open(map,markerLaaneVirumaa);
  });
  
var infoPolvamaa = new google.maps.InfoWindow({
  content:"Põlvamaa piirkond"
  });

google.maps.event.addListener(markerPolvamaa, 'click', function() {
  infoPolvamaa.open(map,markerPolvamaa);
  });

var infoParnumaa = new google.maps.InfoWindow({
  content:"Pärnumaa piirkond"
  });

google.maps.event.addListener(markerParnumaa, 'click', function() {
  infoParnumaa.open(map,markerParnumaa);
  });

var infoRaplamaa = new google.maps.InfoWindow({
  content:"Raplamaa piirkond"
  });

google.maps.event.addListener(markerRaplamaa, 'click', function() {
  infoRaplamaa.open(map,markerRaplamaa);
  });

var infoSaaremaa = new google.maps.InfoWindow({
  content:"Saaremaa piirkond"
  });

google.maps.event.addListener(markerSaaremaa, 'click', function() {
  infoSaaremaa.open(map,markerSaaremaa);
  });

var infoViljandimaa = new google.maps.InfoWindow({
  content:"Viljandimaa piirkond"
  });

google.maps.event.addListener(markerViljandimaa, 'click', function() {
  infoViljandimaa.open(map,markerViljandimaa);
  });

var infoVorumaa = new google.maps.InfoWindow({
  content:"Võrumaa piirkond"
  });

google.maps.event.addListener(markerVorumaa, 'click', function() {
  infoVorumaa.open(map,markerVorumaa);
  });  

var infoJarvamaa = new google.maps.InfoWindow({
  content:"Järvamaa piirkond"
  });

google.maps.event.addListener(markerJarvamaa, 'click', function() {
  infoJarvamaa.open(map,markerJarvamaa);
  });

  
$.ajax({
	type: "POST",
    url: "/PES",
    dataType : "json",
	data:{"id":"1"},
    success: function (data) {
		if(data.Haaled[0].kedamida == "Pruun"){
			markerTartumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/red.png');
		}
		else if(data.Haaled[0].kedamida == "Roheline"){
			markerTartumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/green.png');
		}
		else if(data.Haaled[0].kedamida == "Kollane"){
			markerTartumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow.png');
		}
		else if(data.Haaled[0].kedamida == "Sinine"){
			markerTartumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/blue.png');
		}
		var cont = infoTartumaa.getContent();
		cont += "<br> Liider: "+data.Haaled[0].kedamida+" Erakond <br>"+data.Haaled[0].protsent+"%";
		infoTartumaa.setContent(cont);
    }
});

$.ajax({
	type: "POST",
    url: "/PES",
    dataType : "json",
	data:{"id":"2"},
    success: function (data) {
		if(data.Haaled[0].kedamida == "Pruun"){
			markerValgamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/red.png');
		}
		else if(data.Haaled[0].kedamida == "Roheline"){
			markerValgamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/green.png');
		}
		else if(data.Haaled[0].kedamida == "Kollane"){
			markerValgamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow.png');
		}
		else if(data.Haaled[0].kedamida == "Sinine"){
			markerValgamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/blue.png');
		}
		var cont = infoValgamaa.getContent();
		cont += "<br> Liider: "+data.Haaled[0].kedamida+" Erakond <br>"+data.Haaled[0].protsent+"%";
		infoValgamaa.setContent(cont);
    }
});

$.ajax({
	type: "POST",
    url: "/PES",
    dataType : "json",
	data:{"id":"3"},
    success: function (data) {
		if(data.Haaled[0].kedamida == "Pruun"){
			markerJarvamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/red.png');
		}
		else if(data.Haaled[0].kedamida == "Roheline"){
			markerJarvamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/green.png');
		}
		else if(data.Haaled[0].kedamida == "Kollane"){
			markerJarvamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow.png');
		}
		else if(data.Haaled[0].kedamida == "Sinine"){
			markerJarvamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/blue.png');
		}
		var cont = infoJarvamaa.getContent();
		cont += "<br> Liider: "+data.Haaled[0].kedamida+" Erakond <br>"+data.Haaled[0].protsent+"%";
		infoJarvamaa.setContent(cont);
    }
});

$.ajax({
	type: "POST",
    url: "/PES",
    dataType : "json",
	data:{"id":"4"},
    success: function (data) {
		if(data.Haaled[0].kedamida == "Pruun"){
			markerHarjumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/red.png');
		}
		else if(data.Haaled[0].kedamida == "Roheline"){
			markerHarjumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/green.png');
		}
		else if(data.Haaled[0].kedamida == "Kollane"){
			markerHarjumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow.png');
		}
		else if(data.Haaled[0].kedamida == "Sinine"){
			markerHarjumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/blue.png');
		}
		var cont = infoHarjumaa.getContent();
		cont += "<br> Liider: "+data.Haaled[0].kedamida+" Erakond <br>"+data.Haaled[0].protsent+"%";
		infoHarjumaa.setContent(cont);
    }
});

$.ajax({
	type: "POST",
    url: "/PES",
    dataType : "json",
	data:{"id":"5"},
    success: function (data) {
		if(data.Haaled[0].kedamida == "Pruun"){
			markerHiiumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/red.png');
		}
		else if(data.Haaled[0].kedamida == "Roheline"){
			markerHiiumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/green.png');
		}
		else if(data.Haaled[0].kedamida == "Kollane"){
			markerHiiumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow.png');
		}
		else if(data.Haaled[0].kedamida == "Sinine"){
			markerHiiumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/blue.png');
		}
		var cont = infoHiiumaa.getContent();
		cont += "<br> Liider: "+data.Haaled[0].kedamida+" Erakond <br>"+data.Haaled[0].protsent+"%";
		infoHiiumaa.setContent(cont);
    }
});

$.ajax({
	type: "POST",
    url: "/PES",
    dataType : "json",
	data:{"id":"6"},
    success: function (data) {
		if(data.Haaled[0].kedamida == "Pruun"){
			markerIdaVirumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/red.png');
		}
		else if(data.Haaled[0].kedamida == "Roheline"){
			markerIdaVirumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/green.png');
		}
		else if(data.Haaled[0].kedamida == "Kollane"){
			markerIdaVirumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow.png');
		}
		else if(data.Haaled[0].kedamida == "Sinine"){
			markerIdaVirumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/blue.png');
		}
		var cont = infoIdaVirumaa.getContent();
		cont += "<br> Liider: "+data.Haaled[0].kedamida+" Erakond <br>"+data.Haaled[0].protsent+"%";
		infoIdaVirumaa.setContent(cont);
    }
});

$.ajax({
	type: "POST",
    url: "/PES",
    dataType : "json",
	data:{"id":"7"},
    success: function (data) {
		if(data.Haaled[0].kedamida == "Pruun"){
			markerJogevamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/red.png');
		}
		else if(data.Haaled[0].kedamida == "Roheline"){
			markerJogevamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/green.png');
		}
		else if(data.Haaled[0].kedamida == "Kollane"){
			markerJogevamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow.png');
		}
		else if(data.Haaled[0].kedamida == "Sinine"){
			markerJogevamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/blue.png');
		}
		var cont = infoJogevamaa.getContent();
		cont += "<br> Liider: "+data.Haaled[0].kedamida+" Erakond <br>"+data.Haaled[0].protsent+"%";
		infoJogevamaa.setContent(cont);
    }
});

$.ajax({
	type: "POST",
    url: "/PES",
    dataType : "json",
	data:{"id":"8"},
    success: function (data) {
		if(data.Haaled[0].kedamida == "Pruun"){
			markerLaanemaa.setIcon('http://maps.google.com/mapfiles/ms/icons/red.png');
		}
		else if(data.Haaled[0].kedamida == "Roheline"){
			markerLaanemaa.setIcon('http://maps.google.com/mapfiles/ms/icons/green.png');
		}
		else if(data.Haaled[0].kedamida == "Kollane"){
			markerLaanemaa.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow.png');
		}
		else if(data.Haaled[0].kedamida == "Sinine"){
			markerLaanemaa.setIcon('http://maps.google.com/mapfiles/ms/icons/blue.png');
		}
		var cont = infoLaanemaa.getContent();
		cont += "<br> Liider: "+data.Haaled[0].kedamida+" Erakond <br>"+data.Haaled[0].protsent+"%";
		infoLaanemaa.setContent(cont);
    }
});

$.ajax({
	type: "POST",
    url: "/PES",
    dataType : "json",
	data:{"id":"9"},
    success: function (data) {
		if(data.Haaled[0].kedamida == "Pruun"){
			markerLaaneVirumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/red.png');
		}
		else if(data.Haaled[0].kedamida == "Roheline"){
			markerLaaneVirumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/green.png');
		}
		else if(data.Haaled[0].kedamida == "Kollane"){
			markerLaaneVirumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow.png');
		}
		else if(data.Haaled[0].kedamida == "Sinine"){
			markerLaaneVirumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/blue.png');
		}
		var cont = infoLaaneVirumaa.getContent();
		cont += "<br> Liider: "+data.Haaled[0].kedamida+" Erakond <br>"+data.Haaled[0].protsent+"%";
		infoLaaneVirumaa.setContent(cont);
    }
});

$.ajax({
	type: "POST",
    url: "/PES",
    dataType : "json",
	data:{"id":"10"},
    success: function (data) {
		if(data.Haaled[0].kedamida == "Pruun"){
			markerPolvamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/red.png');
		}
		else if(data.Haaled[0].kedamida == "Roheline"){
			markerPolvamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/green.png');
		}
		else if(data.Haaled[0].kedamida == "Kollane"){
			markerPolvamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow.png');
		}
		else if(data.Haaled[0].kedamida == "Sinine"){
			markerPolvamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/blue.png');
		}
		var cont = infoPolvamaa.getContent();
		cont += "<br> Liider: "+data.Haaled[0].kedamida+" Erakond <br>"+data.Haaled[0].protsent+"%";
		infoPolvamaa.setContent(cont);
    }
});

$.ajax({
	type: "POST",
    url: "/PES",
    dataType : "json",
	data:{"id":"11"},
    success: function (data) {
		if(data.Haaled[0].kedamida == "Pruun"){
			markerParnumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/red.png');
		}
		else if(data.Haaled[0].kedamida == "Roheline"){
			markerParnumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/green.png');
		}
		else if(data.Haaled[0].kedamida == "Kollane"){
			markerParnumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow.png');
		}
		else if(data.Haaled[0].kedamida == "Sinine"){
			markerParnumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/blue.png');
		}
		var cont = infoParnumaa.getContent();
		cont += "<br> Liider: "+data.Haaled[0].kedamida+" Erakond <br>"+data.Haaled[0].protsent+"%";
		infoParnumaa.setContent(cont);
    }
});

$.ajax({
	type: "POST",
    url: "/PES",
    dataType : "json",
	data:{"id":"12"},
    success: function (data) {
		if(data.Haaled[0].kedamida == "Pruun"){
			markerRaplamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/red.png');
		}
		else if(data.Haaled[0].kedamida == "Roheline"){
			markerRaplamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/green.png');
		}
		else if(data.Haaled[0].kedamida == "Kollane"){
			markerRaplamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow.png');
		}
		else if(data.Haaled[0].kedamida == "Sinine"){
			markerRaplamaa.setIcon('http://maps.google.com/mapfiles/ms/icons/blue.png');
		}
		var cont = infoRaplamaa.getContent();
		cont += "<br> Liider: "+data.Haaled[0].kedamida+" Erakond <br>"+data.Haaled[0].protsent+"%";
		infoRaplamaa.setContent(cont);
    }
});

$.ajax({
	type: "POST",
    url: "/PES",
    dataType : "json",
	data:{"id":"13"},
    success: function (data) {
		if(data.Haaled[0].kedamida == "Pruun"){
			markerSaaremaa.setIcon('http://maps.google.com/mapfiles/ms/icons/red.png');
		}
		else if(data.Haaled[0].kedamida == "Roheline"){
			markerSaaremaa.setIcon('http://maps.google.com/mapfiles/ms/icons/green.png');
		}
		else if(data.Haaled[0].kedamida == "Kollane"){
			markerSaaremaa.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow.png');
		}
		else if(data.Haaled[0].kedamida == "Sinine"){
			markerSaaremaa.setIcon('http://maps.google.com/mapfiles/ms/icons/blue.png');
		}
		var cont = infoSaaremaa.getContent();
		cont += "<br> Liider: "+data.Haaled[0].kedamida+" Erakond <br>"+data.Haaled[0].protsent+"%";
		infoSaaremaa.setContent(cont);
    }
});

$.ajax({
	type: "POST",
    url: "/PES",
    dataType : "json",
	data:{"id":"14"},
    success: function (data) {
		if(data.Haaled[0].kedamida == "Pruun"){
			markerViljandimaa.setIcon('http://maps.google.com/mapfiles/ms/icons/red.png');
		}
		else if(data.Haaled[0].kedamida == "Roheline"){
			markerViljandimaa.setIcon('http://maps.google.com/mapfiles/ms/icons/green.png');
		}
		else if(data.Haaled[0].kedamida == "Kollane"){
			markerViljandimaa.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow.png');
		}
		else if(data.Haaled[0].kedamida == "Sinine"){
			markerViljandimaa.setIcon('http://maps.google.com/mapfiles/ms/icons/blue.png');
		}
		var cont = infoViljandimaa.getContent();
		cont += "<br> Liider: "+data.Haaled[0].kedamida+" Erakond <br>"+data.Haaled[0].protsent+"%";
		infoViljandimaa.setContent(cont);
    }
});

$.ajax({
	type: "POST",
    url: "/PES",
    dataType : "json",
	data:{"id":"15"},
    success: function (data) {
		if(data.Haaled[0].kedamida == "Pruun"){
			markerVorumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/red.png');
		}
		else if(data.Haaled[0].kedamida == "Roheline"){
			markerVorumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/green.png');
		}
		else if(data.Haaled[0].kedamida == "Kollane"){
			markerVorumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow.png');
		}
		else if(data.Haaled[0].kedamida == "Sinine"){
			markerVorumaa.setIcon('http://maps.google.com/mapfiles/ms/icons/blue.png');
		}
		var cont = infoVorumaa.getContent();
		cont += "<br> Liider: "+data.Haaled[0].kedamida+" Erakond <br>"+data.Haaled[0].protsent+"%";
		infoVorumaa.setContent(cont);
    }
});

};
