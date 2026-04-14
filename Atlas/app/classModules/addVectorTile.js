const mydataURL = 'https://refactored-carnival-x56r59wpvr7jfw4w-8801.app.github.dev/kf391972.TP_Proximity_1km_Join_Indice_equite/{z}/{x}/{y}.pbf'

function addVectorTileLayer(map) {
//Permet d'ajouter une première source, pas besoin de refaire un map.addSource
   map.addSource('myVTSid', {
       type: 'vector',
       tiles: [mydataURL]
   });
//Une fois que la source est ajoutée, on ajoute le layer et on le stylise selon les propriétés de MapLibre (voir MapLibre Style Specification)
//Toutes les couches qu'on ajoute dans le map.addLayer vont être affichées quand on appelle la fonction dans app.js
   map.addLayer({
       'id': 'myVTLayerId',
       'type': 'fill',
       'source': 'myVTSid',
       'source-layer': 'kf391972.TP_Proximity_1km_Join_Indice_equite'
   });
 }

//Ensuite ajouter le map.on