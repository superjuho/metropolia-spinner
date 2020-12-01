const metropoliaLogo = document.getElementById('metropolia-logo');

nodecg.listenFor('positionLogo', (data) =>{
	console.log("Nyt meillä on: ", data.size.toString(), data.y, data.x);
	metropoliaLogo.style["width"] = data.size.toString() + "px";
	metropoliaLogo.style["top"] = data.y.toString() + "px";
	metropoliaLogo.style["right"] = data.x.toString() + "px";
})
