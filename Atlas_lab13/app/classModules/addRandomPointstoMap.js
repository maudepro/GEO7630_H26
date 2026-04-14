var points = turf.randomPoint(25, { bbox: [-180, -90, 180, 90]});
//console.log('CECI EST MON RANDOM POINTS',points)

function addRandomPointsToMap(map) {

    map.addSource ('randomPoints', {
        type: 'geojson',
        data: points
    });

    map.addLayer({
        id: 'randomPointsLayer',
        type: 'circle',
        source: 'randomPoints'
    });
}

   