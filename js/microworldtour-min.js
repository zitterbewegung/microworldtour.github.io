function addMarker(o,a,e){0===a?L.marker(o.lonLat,{icon:home_icon}).addTo(map).bindPopup("Nicholas posted all the micro:bits from Towcester."):L.marker(o.lonLat,o.options).addTo(map).bindPopup(o.popup)}function addRoute(o,a){var e=[];o.forEach(function(o,a,n){e.push(o.lonLat)});var n=L.polyline(e,{weight:2,color:a}).addTo(map),t=L.polylineDecorator(n).addTo(map),p=0,i=window.setInterval(function(){t.setPatterns([{offset:p+"%",repeat:0,symbol:L.Symbol.arrowHead({pixelSize:8,polygon:!1,pathOptions:{stroke:!0,color:a}})}]),(p+=.5)>100&&(p=0)},20)}var map=L.map("map").setView([51.505,-.09],3),api_key="pk.eyJ1IjoibnRvbGwiLCJhIjoiY2lnZ3R4Z2dkMHNwN3Zpa3Jyb3dsOTd1OSJ9.ea8lBQyOqbJ-lwjeAhr2WQ",tile_layer_url="https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}";L.tileLayer(tile_layer_url,{attribution:'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',maxZoom:18,minZoom:3,continuousWorld:!1,noWrap:!0,id:"ntoll.ciggtxg9c0snivuknl4epgti3",accessToken:api_key}).addTo(map);var MicroIcon=L.Icon.extend({options:{iconSize:[32,21],iconAnchor:[16,21],popupAnchor:[0,-20]}}),home_icon=new MicroIcon({iconUrl:"/img/home.png"});