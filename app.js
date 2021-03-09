// function for initialization
function init() {
    
    // read in the samples.json file
    d3.json("samples.json").then((samples) => {

        // check if data loaded successfully
       console.log(samples)
       console.log(samples.names)

        // select the dropdown 
        var dropdown = d3.select("#selDataset");

        // function for appending the id to the dropdown
        samples.names.forEach(function (name) {
            console.log(name)
            dropdown.append("option").text(name).attr("value", name)
        });

        // call funtions for plots and demographic information
        demoinfo(samples.names[0]);
        plots(samples.names[0]);
    });
};

// function for the change event (when a new id is selected)
function optionChanged(name) {
    console.log(name)
    demoinfo(name)
    plots(name)
};