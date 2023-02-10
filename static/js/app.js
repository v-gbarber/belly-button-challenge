function init() {
    //dropdown
    var select = d3.select("#selDataset");
    //Get sample names
    d3.json("samples.json").then(function (data) {
        var samepleNames = data.names;
        samepleNames.forEach((element) => {
            select.append("option").text(element).property("value", element); 
        });
        
        buildPanel(samepleNames[0]);
        buildCharts(samepleNames[0]);


    });


}

function buildPanel(sample) {
    d3.json("samples.json").then(function (data) {
        var sampleMetadata = data.metadata;
        var metaArray = sampleMetadata.filter(x => x.id == sample);
        var result = metaArray[0];
        var PANEL = d3.select("#sample-metadata");
        PANEL.html("");
        Object.entries(result).forEach(([key, value]) => {
            PANEL.append("h5").text(`${key}: ${value}`)

        });
    });

}

function buildCharts(sample) {
    d3.json("samples.json").then(function (data) {
        var samepleSamples = data.samples;
        // console.log(samepleSamples);



    });

}


function optionChanged(newSelection) {
    buildPanel(newSelection);
    buildCharts(newSelection);

}

init();
























