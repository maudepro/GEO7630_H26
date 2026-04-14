// création de la carte Mapbox GL
var map = new maplibregl.Map({
    container: 'map', // identifiant de l'élément HTML conteneur de la carte
    style: 'https://api.maptiler.com/maps/dataviz/style.json?key=JhO9AmIPH59xnAn5GiSj', // URL du style de la carte
    center: [-73.55, 45.55], // position centrale de la carte
    zoom: 9, // niveau de zoom initial
    hash: true // activation du hash pour la gestion de l'historique de la carte
});

// Variable pour stocker les couches de visualisation
var myLayers = ['rdp', 'buffer', 'union', 'joined', 'grid', 'clusters', 'unclustered-point', 'heatmap', 'extrusion', 'cluster-count'];
var registeredLayerIds = {};

function updateFeatureCountOnMove() {
    if (typeof featureCount === 'function') {
        console.log('Calling featureCount() from map moveend event');
        featureCount();
    } else {
        console.warn('featureCount function not available in map moveend event');
    }
}

//Une fois que la carte est chargée, on ajoute les points aléatoires et on met à jour le compteur de features à chaque déplacement de la carte
map.on('load', function() {
    addRandomPointsToMap(map);
    //J'ajoute ma fonction pour ajouter la première fonction que j'ai crée dans classModules/addVectorTile
    addVectorTileLayer(map)
    map.on('moveend', updateFeatureCountOnMove);
    updateFeatureCountOnMove();
});

// Ajouter les event listeners pour les boutons de visualisation avancée
document.getElementById('generateClusters').addEventListener('click', generateClusters);
document.getElementById('generateHeatmap').addEventListener('click', generateHeatmap);
document.getElementById('generateExtrusion').addEventListener('click', generateExtrusion);