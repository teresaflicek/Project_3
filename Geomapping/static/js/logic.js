var layers = {
    Violence_Against_Civilians: new L.LayerGroup(),
    Protests: new L.LayerGroup(),
    Battles: new L.LayerGroup(),
    Strategic_Developments: new L.LayerGroup(),
    Riots: new L.LayerGroup(),

};

var myMap = L.map("map", {
    center: [20.6764, -103.3422],
    zoom: 11,
    layers: [
        layers.Violence_Against_Civilians,
        layers.Protests,
        layers.Battles,
        layers.Strategic_Developments,
        layers.Riots
    ]
  });
  
  // Adding tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);

var overlays = {
    "Violence Against Civilians": layers.Violence_Against_Civilians,
    "Protests": layers.Protests,
    "Battles": layers.Battles,
    "Strategic Developments": layers.Strategic_Developments,
    "Riots": layers.Riots
};


var url = "static/data/Guadalajara.json"


response = d3.json(url, createMarkers);
    

    
    function createMarkers(response) {    
        
        var location = response.location;
        var eventMarkers = [];
      
        for (var i = 0; i < response.length; i++) {
            
            var latitude = response[i].latitude;
            var longitude = response[i].longitude
                coordinates.push([[latitude, longitude]]);
            var coordinates = ([response[i].latitude, response[i].longitude]);
            var eventMarker = L.marker([coordinates])
                .bindPopup('<h3>Event Location:' + response.location + '<h3><h3>Event Type:' + response.event_type + '</h3>');

            eventMarkers.push(eventMarker);
            console.log(eventMarkers);     
    }    

        // var location = response[i].location;
        // console.log(location)z

       
        //     var latitude = response[i].latitude;
        //     var longitude = response[i].longitude;
        
        //         coordinates.push([latitude, longitude])

 
    

    // 



    // geojson = L.G
    // onEachFeature: function(feature, layer) {}
    //     var latitude = +d.latitude;
    //     var longitude = +d.longitude;
    //         coordinates.push([latitude, longitude])

        
}
;


// var data = d3.csv(url, function(data) {
//     console.log(data)
//     var parseTime = d3.timeParse("%d-%b-%Y")
    
    
//     var lat = +data.latitude;
//     var long = +data.longitude;
//         coordinates.push([lat, long])

//     var location = +data.location;
//     var date = parseTime(data.event_date);
//     var event_type = +data.event_type;
//     var sub_type = +data.sub_event_type;
//     var actors = +data.assoc_actor_1;
//     // console.log(lat)
//     // console.log(date)
    
// });


var coordinates = [];
 console.log(coordinates);






// var data = d3.csvParse("../data/Guadalajara.csv", string)

// var data = d3.csvParse("../data/Guadalajara.csv", string, function(data) {
//         // data.lat = +data.latitude;
//         // data.long = +data.longitude;
//         // data.location = +data.location;
//         // data.date = +data.event_date;
//         // data.event_type = +data.event_type;
//         // data.sub_type = +data.sub_event_type;
//         // data.actors = +data.assoc_actor_1;

        
//     });
    

//     console.log(data);   

// d3.csv("Guadalajara.csv", function(d) {
//     console.log(d)
//     return {
//       // eventDate: d.event_date,
//       eventType: d.event_type,
//       sub_type: d.sub_event_type,
//       actor: d.assoc_actor_1,
//       location: d.location,
//       latitude: d.latitude,
//       longitude: d.longitude,

      
//     };
    
// });
   
// //   }).then(function(data) {
    
//   });






// url = 

// d3.csv('data/Guadalajara.csv').then(function(text) {
//     console.log(data);
// })  
   


// d3.dsv(',', '../data/Guadalajara.csv', function(d) {
// var data = d3.csvParse('../data/Guadalajara.csv');    
    
// var data = dsv.parseRows('../data/Guadalajara.csv', function(d) {    
    
//     return {
//         latitude: +d.latitude,
//         longitude: +d.longitude,
//         location: d.location,
//         event_type: d.event_type,
//         sub_event_type: d.sub_event_type,
//         actors: d.assoc_actor_1,
    

//     };
    
// });
// console.log(data);
// d3.csv(',', "data/Guadalajara.csv").then(function(data) {
//     //     eventData.forEach(function(d) {
//     //         data.lat = +data.latitude;
//     //         data.long = +data.longitude;
//     //         data.location = +data.location;
//     //         data.date = +data.event_date;
//     //         data.event_type = +data.event_type;
//     //         data.sub_type = +data.sub_event_type;
//     //         data.actors = +data.assoc_actor_1;
    
//             console.log(data);
//     //     })
//     });
    








// var data = d3.csvParse(string, function (d) { 
//     return {

//     }


