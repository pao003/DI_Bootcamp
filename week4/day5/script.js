var planets = [
		        ["Mercury", "46.3, 46.3, 46.3"],
		        ["Venus", "80.4, 78.4, 76.1"], 
		        ["Earth", "34.9, 37.3, 51.4"], 
		        ["Mars", "99.6, 52.9, 37.3"],
		        ["Jupiter", "85.1, 74.9, 65.1"], 
		        ["Saturn", "86.3, 73.7, 50.6"],
		        ["Uranus", "76.5, 91.4, 92.5"],
		        ["Neptune", "28.2, 47.5, 98.8"]
	    ];

	    for (var i = 0; i < planets.length; i++) {

	        var planetNode = document.createElement("div");
	        planetNode.style.backgroundColor = "rgb(" + planets[i][1] + ")";
	        planetNode.className = "planet";

	        var nameNode = document.createTextNode(planets[i][0]);
	        planetNode.appendChild(nameNode);

	        var body = document.querySelector("body");
	        body.appendChild(planetNode);
	    }
	    