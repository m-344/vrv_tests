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

$("#changeSize").on("click", function () {

var id = 'm1_k421_001';
	$("#rendering").css("width", "2500px");
		document.getElementById(id).classList.toggle('chosen');
	/*$("header").css("color", "blue");*/
})

$("#chooseMeasure").on("click", function () {
	$("#rendering").css("width", "50px");
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