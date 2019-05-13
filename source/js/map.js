// var map = null;


function initMap() {

  var areas = [{
      id: 1,
      name: 'Тосненский',
      center: {
        lat: 55.9026731,
        lng: 37.521111
      },
      markers: [{
        location: {
          lat: 55.9026731,
          lng: 37.521111
        }
      }]
    }
  ]

  var activeArea = areas[0];

  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: activeArea.center,
    zoom: 13,
    styles: [{
        "featureType": "landscape",
        "stylers": [{
            "hue": "#FFBB00"
          },
          {
            "saturation": 43.400000000000006
          },
          {
            "lightness": 37.599999999999994
          },
          {
            "gamma": 1
          }
        ]
      },
      {
        "featureType": "road.highway",
        "stylers": [{
            "hue": "#FFC200"
          },
          {
            "saturation": -61.8
          },
          {
            "lightness": 45.599999999999994
          },
          {
            "gamma": 1
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "stylers": [{
            "hue": "#FF0300"
          },
          {
            "saturation": -100
          },
          {
            "lightness": 51.19999999999999
          },
          {
            "gamma": 1
          }
        ]
      },
      {
        "featureType": "road.local",
        "stylers": [{
            "hue": "#FF0300"
          },
          {
            "saturation": -100
          },
          {
            "lightness": 52
          },
          {
            "gamma": 1
          }
        ]
      },
      {
        "featureType": "water",
        "stylers": [{
            "hue": "#0078FF"
          },
          {
            "saturation": -13.200000000000003
          },
          {
            "lightness": 2.4000000000000057
          },
          {
            "gamma": 1
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [{
            "hue": "#00FF6A"
          },
          {
            "saturation": -1.0989010989011234
          },
          {
            "lightness": 11.200000000000017
          },
          {
            "gamma": 1
          }
        ]
      }
    ]
  });

  var markers = activeArea.markers.map(function (markers) {
    return new google.maps.Marker({
      map: map,
      position: markers.location
    });
  });


  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });



  var listAreas = document.querySelector('.geography__list');
  listAreas.innerHTML = '';
  areas.forEach(function (area) {
    var item = createElementFromHtmlList('<li class="geography__item" data-id=""></li>')

    item.innerHTML = area.name;
    item.attributes[1].value = area.id;
    listAreas.appendChild(item);
  });

  listAreas.addEventListener('click', function (evt) {
    evt.preventDefault();

    
    evt.target.classList.add('geography__item--active');
    var area = areas.find(function (c) {
      console.log(evt.target);
 
      return c.id == evt.target.attributes[1].value;
    })

    if (area) activeArea = area;
    
    map.setCenter(activeArea.center);
    // console.log(activeArea);
    markers.forEach(function (marker) {
      marker.setMap(null);
    })
    markers = activeArea.markers.map(function (marker) {
      return new google.maps.Marker({
        map: map,
        position: marker.location
      });
    });
  })
}

function createElementFromHtml(html) {
  var wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper.children[0];
}

function createElementFromHtmlList(html) {
  var selectList = document.createElement('li');
  selectList.innerHTML = html;
  return selectList.children[0];
}

function clearPhone(phone) {
  return phone.replace(/[-,(,),\s]/g, '');
}
