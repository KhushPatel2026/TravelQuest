var map, searchManager;

    function GetMap() {
        map = new Microsoft.Maps.Map('#myMap', {
            credentials: mapToken,
        });
        //Make a request to geocode New York, NY.
        geocodeQuery(loc);
    }

    function geocodeQuery(query) {
        //If search manager is not defined, load the search module.
        if (!searchManager) {
            //Create an instance of the search manager and call the geocodeQuery function again.
            Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
                searchManager = new Microsoft.Maps.Search.SearchManager(map);
                geocodeQuery(query);
            });
        } else {
            var searchRequest = {
                where: query,
                callback: function (r) {
                    //Add the first result to the map and zoom into it.
                    if (r && r.results && r.results.length > 0) {
                        var pin = new Microsoft.Maps.Pushpin(r.results[0].location, {
                          color: 'red'
                      });
                        map.entities.push(pin);

                        var infobox = new Microsoft.Maps.Infobox(r.results[0].location, {
                          title: tit,
                          description: des 
                      });
                      infobox.setMap(map)

                        map.setView({ center: r.results[0].location,
                          zoom: 17 });


                    }
                },
                errorCallback: function (e) {
                    //If there is an error, alert the user about it.
                    alert("No results found.");
                }
            };

            //Make the geocode request.
            searchManager.geocode(searchRequest);
        }
    }