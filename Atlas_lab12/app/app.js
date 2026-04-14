// création de la carte Mapbox GL
var map = new maplibregl.Map({
    container: 'map', // identifiant de l'élément HTML conteneur de la carte
    style: 'https://api.maptiler.com/maps/dataviz/style.json?key=JhO9AmIPH59xnAn5GiSj', // URL du style de la carte
    center: [-73.55, 45.55], // position centrale de la carte
    zoom: 9, // niveau de zoom initial
    hash: true // activation du hash pour la gestion de l'historique de la carte
});

// Contrôle de navigation
var nav = new maplibregl.NavigationControl({
    showCompass: true,
    showZoom: true,
    visualizePitch: true
});
map.addControl(nav, 'top-right');

//Contrôle de géolocalisation
var geolocateControl = new maplibregl.GeolocateControl({
    positionOptions: { enableHighAccuracy: true },
    trackUserLocation: true
});
map.addControl(geolocateControl, 'bottom-right');

//Contrôle d’échelle
var scale = new maplibregl.ScaleControl({ unit: 'metric' });
map.addControl(scale);

//Ajout de map.on
map.on('load', function () {
    map.addSource('qt_arbres_quartier_source', {
        type: 'vector',
        tiles: ['https://sturdy-palm-tree-jj6rj457q4pwhpxg4-8801.app.github.dev/public.densite_arbres_quartiers/{z}/{x}/{y}.pbf']
    });
    map.addLayer({
        'id': 'qt_arbres_quartier',
        'type': 'fill',
        'source': 'qt_arbres_quartier_source',
        'source-layer': 'public.densite_arbres_quartiers',
        'paint': {
            'fill-color': [
            'interpolate',
                ['linear'],
                ['get', 'qt_arbres'],
                0, 'rgb(255, 255, 255)',
                100, 'rgba(192, 192, 255, 0.64)',
                1000, 'rgba(46, 46, 255, 0.58)',
                5000, 'rgba(68, 0, 255, 0.66)',
                7000, 'rgba(19, 0, 70, 0.66)'
            ],
    'fill-opacity': 0.7
}
    });
});


//Ajout d'une fonction loadWFS() et qui génère une couleur aléatoire en format hexa
/**
 * Fonction qui génère une couleur aléatoire en format hexadécimal.
 * @returns {string} Couleur générée au format hexadécimal.
 */
function getRandomColor() {
    // Définition des caractères hexadécimaux possibles
    var letters = '0123456789ABCDEF';
    // Initialisation de la couleur avec le préfixe hexadécimal (#)
    var color = '#';
    // Boucle pour générer chaque caractère de la couleur (6 caractères)
    for (var i = 0; i < 6; i++) {
        // Sélection aléatoire d'un caractère hexadécimal
        color += letters[Math.floor(Math.random() * 16)];
    }
    // Retourne la couleur générée au format hexadécimal
    return color;
}

/**
 * Fonction qui charge une couche WFS depuis pgFeatureServ et l'ajoute à la carte MapLibre.
 * Cette fonction ajoute une source de données GeoJSON à partir d'une URL pgFeatureServ
 * et ajoute une couche de remplissage ('fill') à la carte MapLibre en utilisant cette source de données.
 */
function loadWFS() {
    // Ajout de la source de données des arrondissements depuis pgFeatureServ
    map.addSource('arrondissements-source', {
        type: 'geojson', // Type de source de données
        data: 'https://donnees.montreal.ca/dataset/9797a946-9da8-41ec-8815-f6b276dec7e9/resource/e18bfd07-edc8-4ce8-8a5a-3b617662a794/download/limites-administratives-agglomeration.geojson' // URL pgFeatureServ GeoJSON ! Attention il faut bien inclure la méthode qui fait la requete sans limite d'items de données
    });

    // Ajout de la couche des arrondissements à la carte MapLibre
    map.addLayer({
        'id': 'arrondissements', // Identifiant de la couche
        'type': 'fill', // Type de géométrie de la couche (remplissage)
        'source': 'arrondissements-source', // Source des données de la couche
        'paint': {
            'fill-outline-color': 'black',
            'fill-color': getRandomColor(), // Si la condition est vraie, utilisez une couleur aléatoire
            'fill-opacity': 0.3 // Opacité de remplissage (30%)
        }
    });
}