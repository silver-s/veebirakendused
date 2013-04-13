window.onload = function() {
 handleHashOnLoad();
}

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
}



$(document).ready(function(){
 $("#valima1").click(function(){
	 var loader = document.getElementById("sisu");
	 var divs = loader.getElementsByClassName('sisu_a');
	 for(var i=0; i<divs.length; i++) {
		
		        divs[i].style.display="none";
			
	 }

	 document.getElementById("valima").style.display="block";
	 window.location.hash = 'valima';
 });

 $("#kandidaadid1").click(function(){
	 var loader = document.getElementById("sisu");
	 var divs = loader.getElementsByClassName('sisu_a');
	 for(var i=0; i<divs.length; i++) {
		
		        divs[i].style.display="none";
			
	 }

	 document.getElementById("kandidaadid").style.display="block";
	 window.location.hash = 'kandidaadid';

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
	 window.location.hash = 'tulemused';

 });
 $("#kandideerijale1").click(function(){
	 var loader = document.getElementById("sisu");
	 var divs = loader.getElementsByClassName('sisu_a');
	 for(var i=0; i<divs.length; i++) {
		
		        divs[i].style.display="none";
			
	 }

	 document.getElementById("kandideerima").style.display="block";
 	 window.location.hash = 'kandideerijale';

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
	alert("Hääl tühistatud");
};








