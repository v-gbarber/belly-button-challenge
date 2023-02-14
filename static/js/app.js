function init() {
    //dropdown
    var select = d3.select("#selDataset");
    //Get sample names
    d3.json("samples.json").then((data) {
        var sampleNames = data.names;
        console.log(data);

        sampleNames.forEach((element) => {
            select.append("option").text(element).property("value", element); 
        });
       
        buildPanel(sampleNames[0]);
        buildCharts(sampleNames[0]);
        


    });


}
//Display the sample metadata, i.e., an individual's demographic information
function buildPanel(sample) {
    d3.json("samples.json").then((data) {
        var sampleMetadata = data.metadata;
        console.log(sampleMetadata);
        //filter id to match user id
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
    d3.json("samples.json").then((data) => {
        var sampleSamples = data.samples;
        // console.log(sampleSamples);
        var sampleArray = sampleSample.filter(sample => sample.id == option);
        console.log(sampleArray);
        //selectFirstElement from filtered sample
        var result = sampleArray[0];
        // Use otu_ids as the labels for the bar chart.
        const [otu_ids, otu_labels, sample_values] = [
            .slice(0,10)
            .map((i) => "OTU" + i.toSting())
            .reverse(),
            result.otu_labels.slice(0,10).reverse(),
            result.sample_values.slice(0,10).reverse(),
        
        ];

        // var y = sampleArray.map(row => row.otu_ids);
        // var y1 = []

        // for(i=0; i<y[0].length; i++) {
        //     y1.push(`OTU ${y[0][i]}`);
        // }

        // Use otu_labels as the hovertext for the chart.
        // Use sample_values as the values for the bar chart.
        // Use otu_ids for the x values.
    



        // var x =sampleArray.map (row => (row.sample_values));
        // var content =sampleArray.map(row => (row.otu_labels));

    
// //Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
        let trace1 = {
             x: sample_values,
             y: otu_ids,
            text: otu_labels,
            type:"bar:",
            orientation:"h",
        };

        var info = [trace1];

        let layout = {
            title: "Bar",
            color: blue 
        };
        Plotly.newPlot("bar", info, layout);
    };
 // Create a bubble chart that displays each sample.
        var trace2 = {
            x:result.otu_ids,
            y:result.sample_values
            text:result.otu_labels,
            mode: "markers",
            marker: {
                color:result.sample_values,
                size: result.sample_values,
            },

        };

        var bubbles = [trace2];

        var layout2 = {
            title:
            xaxis: {title: "OTU ID" },
            color:
        };
        Plotly.newPlot("bubble", bubbles, layout2);
    
    };

function optionChanged(newSelection) {
    buildPanel(newSelection);
    buildCharts(newSelection);

}

init();


// Use sample_values for the y values.

// Use sample_values for the marker size.

// Use otu_ids for the marker colors.

// Use otu_labels for the text values.















