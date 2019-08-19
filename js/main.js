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
	
	var rect = document.createElement("rect");
	var parentDiv = document.getElementById("m1_k421_001").parentNode;
	var sp2 = document.getElementById("m1_k421_001");
	parentDiv.insertBefore(rect, sp2);
	
	/*document.getElementById('#m1_k421_001').classList.toggle('chosen');*/
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