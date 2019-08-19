///////////////////////////
/* Create the vrvToolkit */
///////////////////////////
var vrvToolkit = new verovio.toolkit();
var meiData;


////////////////////////////////////
/* Load the file using a HTTP GET */
////////////////////////////////////
$.ajax({
	url: "./data/MRE.xml", dataType: "text", success: function (data) {
		svg = vrvToolkit.renderData(data, {
		});
		$("#rendering").html(svg);
	}
});

$("#chooseMeasure").on("click", function () {
	
	/*	create rectangle*/
	var rect = document.createElement("rect");
	/*	find coordinates of the searched measure*/
	var measure = document.getElementById("m1_k421_001");
	var measureCoord = measure.getBBox();
	
	/*	set the attributes to the rectangle*/
	rect.setAttribute('x', measureCoord.x);
	rect.setAttribute('y', measureCoord.y);
	rect.setAttribute('width', measureCoord.width);
	rect.setAttribute('height', measureCoord.height);
	rect.setAttribute('fill', 'rgba(207, 187, 250, 0.4)');
	
	/*	append the rectangle before the searched measure*/
	var parentDiv = document.getElementById("m1_k421_001").parentNode;
	parentDiv.insertBefore(rect, measure);
})


/*function renderMEI() {
options = {
adjustPageHeight: true,
scale: 25,
noLayout: 1,
appXPathQuery: appSelection,
substXPathQuery: substSelection
};
vrvToolkit.setOptions(options);

var svg = vrvToolkit.renderData(meiData, {
});
$("#rendering").html(svg);
}*/