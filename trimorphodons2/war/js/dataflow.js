var cID=Math.floor(Math.random()*1000000);
$.get("GetToken", { kliendiID: cID}, function(data) {
	token = data;
	channel = new goog.appengine.Channel(token.trim());
	socket = channel.open();
	socket.onopen = onOpened;
	socket.onmessage = onMessage;
	socket.onerror = onError;
	socket.onclose = onClose;


});



onOpened = function() {
};

onError = function() {
	alert("Error is <br/>"+error.description+" <br /> and HTML code"+error.code);
};

onMessage = function() {
	$('#tabel tr:gt(0)').remove();
	$.getJSON('/Nimekiri',
			function(response) {
			$.each(response.Kandidaadid, function() { 
				var row = '<tr><td>'+this.nimi+'</td><td>'+this.vanus+'</td><td>'+this.erakond+'</td><td>'+this.amet+'</td><td>'+this.piirkond +'</td><td><a href="img/kandidaat.png"><img class="thumbnail_photo" src="img/kandidaat.png" alt="kandidaat1"></a></td></tr>';
				$('#tabel').append(row);
				});
			}
		);
	$('#tabelpiirk tr:gt(0)').remove();
	$.getJSON('/PiirkonnadeSt',
			function(response) {
			$.each(response.Haaled, function() { 
				var row = '<tr><td>'+this.kedamida+'</td><td>'+this.hulk+'</td><td>'+this.protsent+'</td></tr>';
			$('#tabelpiirk').append(row);
				});
			}
		);
	$('#tabelerakond tr:gt(0)').remove();
	$.getJSON('/ErakonnadeSt',
			function(response) {
		$.each(response.Haaled, function() { 
			var row = '<tr><td>'+this.kedamida+'</td><td>'+this.hulk+'</td><td>'+this.protsent+'</td></tr>';
			$('#tabelerakond').append(row);
		});
	}
	);
	$('#tabelknd tr:gt(0)').remove();
	$.getJSON('/KandidaadiSt',
			function(response) {
		$.each(response.Haaled, function() { 
			var row = '<tr><td>'+this.kedamida+'</td><td>'+this.hulk+'</td><td>'+this.protsent+'</td></tr>';
			$('#tabelknd').append(row);
		});
	}
	);
	$('#tabelrg tr:gt(0)').remove();
	$.getJSON('/RiigiSt',
			function(response) {
		$.each(response.Haaled, function() { 
			var row = '<tr><td>'+this.kedamida+'</td><td>'+this.hulk+'</td><td>'+this.protsent+'</td></tr>';
			$('#tabelrg').append(row);
		});
	}
	);
}


onClose = function() {
};

