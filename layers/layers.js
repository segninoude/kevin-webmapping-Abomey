ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32631").setExtent([362683.713916, 789107.162983, 401031.873934, 802377.029330]);
var wms_layers = [];

var format_Commune_Abomey_0 = new ol.format.GeoJSON();
var features_Commune_Abomey_0 = format_Commune_Abomey_0.readFeatures(json_Commune_Abomey_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Commune_Abomey_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commune_Abomey_0.addFeatures(features_Commune_Abomey_0);
var lyr_Commune_Abomey_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Commune_Abomey_0, 
                style: style_Commune_Abomey_0,
                interactive: true,
                title: '<img src="styles/legend/Commune_Abomey_0.png" /> Commune_Abomey'
            });
var format_Villages_1 = new ol.format.GeoJSON();
var features_Villages_1 = format_Villages_1.readFeatures(json_Villages_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Villages_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Villages_1.addFeatures(features_Villages_1);
var lyr_Villages_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Villages_1, 
                style: style_Villages_1,
                interactive: true,
                title: '<img src="styles/legend/Villages_1.png" /> Villages'
            });
var format_Ville_Abomey_2 = new ol.format.GeoJSON();
var features_Ville_Abomey_2 = format_Ville_Abomey_2.readFeatures(json_Ville_Abomey_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Ville_Abomey_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ville_Abomey_2.addFeatures(features_Ville_Abomey_2);
var lyr_Ville_Abomey_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ville_Abomey_2, 
                style: style_Ville_Abomey_2,
                interactive: true,
                title: '<img src="styles/legend/Ville_Abomey_2.png" /> Ville_Abomey'
            });
var format_infrastructure_de_sante_3 = new ol.format.GeoJSON();
var features_infrastructure_de_sante_3 = format_infrastructure_de_sante_3.readFeatures(json_infrastructure_de_sante_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_infrastructure_de_sante_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_infrastructure_de_sante_3.addFeatures(features_infrastructure_de_sante_3);
var lyr_infrastructure_de_sante_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_infrastructure_de_sante_3, 
                style: style_infrastructure_de_sante_3,
                interactive: true,
    title: 'infrastructure_de_sante<br />\
    <img src="styles/legend/infrastructure_de_sante_3_0.png" /> Centre Hospatalier Départemental du Zou<br />\
    <img src="styles/legend/infrastructure_de_sante_3_1.png" /> Hopital de Zone<br />\
    <img src="styles/legend/infrastructure_de_sante_3_2.png" /> Maternité<br />\
    <img src="styles/legend/infrastructure_de_sante_3_3.png" /> Centre de Santé<br />\
    <img src="styles/legend/infrastructure_de_sante_3_4.png" /> Clinique<br />\
    <img src="styles/legend/infrastructure_de_sante_3_5.png" /> Dispensaire<br />'
        });
var format_Route_Abomey_4 = new ol.format.GeoJSON();
var features_Route_Abomey_4 = format_Route_Abomey_4.readFeatures(json_Route_Abomey_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Route_Abomey_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_Abomey_4.addFeatures(features_Route_Abomey_4);
var lyr_Route_Abomey_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route_Abomey_4, 
                style: style_Route_Abomey_4,
                interactive: true,
    title: 'Route_Abomey<br />\
    <img src="styles/legend/Route_Abomey_4_0.png" /> Route bitumée<br />\
    <img src="styles/legend/Route_Abomey_4_1.png" /> Route pavée<br />\
    <img src="styles/legend/Route_Abomey_4_2.png" /> Route non revetue<br />'
        });
var format_Riviere_Abomey_5 = new ol.format.GeoJSON();
var features_Riviere_Abomey_5 = format_Riviere_Abomey_5.readFeatures(json_Riviere_Abomey_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Riviere_Abomey_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Riviere_Abomey_5.addFeatures(features_Riviere_Abomey_5);
var lyr_Riviere_Abomey_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Riviere_Abomey_5, 
                style: style_Riviere_Abomey_5,
                interactive: true,
                title: '<img src="styles/legend/Riviere_Abomey_5.png" /> Riviere_Abomey'
            });

lyr_Commune_Abomey_0.setVisible(true);lyr_Villages_1.setVisible(true);lyr_Ville_Abomey_2.setVisible(true);lyr_infrastructure_de_sante_3.setVisible(true);lyr_Route_Abomey_4.setVisible(true);lyr_Riviere_Abomey_5.setVisible(true);
var layersList = [lyr_Commune_Abomey_0,lyr_Villages_1,lyr_Ville_Abomey_2,lyr_infrastructure_de_sante_3,lyr_Route_Abomey_4,lyr_Riviere_Abomey_5];
lyr_Commune_Abomey_0.set('fieldAliases', {'nom_com': 'nom_com', 'population': 'population', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_Villages_1.set('fieldAliases', {'nom_loc': 'nom_loc', 'type': 'type', 'statut_adm': 'statut_adm', 'commune': 'commune', 'arrondisst': 'arrondisst', 'village_ad': 'village_ad', });
lyr_Ville_Abomey_2.set('fieldAliases', {'nom_loc': 'nom_loc', 'type': 'type', 'statut_adm': 'statut_adm', 'commune': 'commune', 'arrondisst': 'arrondisst', 'village_ad': 'village_ad', 'nom_enq': 'nom_enq', });
lyr_infrastructure_de_sante_3.set('fieldAliases', {'type': 'type', 'nature': 'nature', 'nom_san': 'nom_san', });
lyr_Route_Abomey_4.set('fieldAliases', {'num_route': 'num_route', 'type': 'type', 'cl_admin': 'cl_admin', 'revetement': 'revetement', 'shape_leng': 'shape_leng', });
lyr_Riviere_Abomey_5.set('fieldAliases', {'nom_ce': 'nom_ce', 'type': 'type', 'regime': 'regime', 'shape_leng': 'shape_leng', });
lyr_Commune_Abomey_0.set('fieldImages', {'nom_com': 'TextEdit', 'population': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_Villages_1.set('fieldImages', {'nom_loc': 'TextEdit', 'type': 'TextEdit', 'statut_adm': 'TextEdit', 'commune': 'TextEdit', 'arrondisst': 'TextEdit', 'village_ad': 'TextEdit', });
lyr_Ville_Abomey_2.set('fieldImages', {'nom_loc': '', 'type': '', 'statut_adm': '', 'commune': '', 'arrondisst': '', 'village_ad': '', 'nom_enq': '', });
lyr_infrastructure_de_sante_3.set('fieldImages', {'type': 'TextEdit', 'nature': 'TextEdit', 'nom_san': 'TextEdit', });
lyr_Route_Abomey_4.set('fieldImages', {'num_route': 'TextEdit', 'type': 'TextEdit', 'cl_admin': 'TextEdit', 'revetement': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_Riviere_Abomey_5.set('fieldImages', {'nom_ce': 'TextEdit', 'type': 'TextEdit', 'regime': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_Commune_Abomey_0.set('fieldLabels', {'nom_com': 'inline label', 'population': 'inline label', 'shape_leng': 'inline label', 'shape_area': 'inline label', });
lyr_Villages_1.set('fieldLabels', {'nom_loc': 'inline label', 'type': 'inline label', 'statut_adm': 'inline label', 'commune': 'no label', 'arrondisst': 'inline label', 'village_ad': 'inline label', });
lyr_Ville_Abomey_2.set('fieldLabels', {'nom_loc': 'inline label', 'type': 'inline label', 'statut_adm': 'inline label', 'commune': 'inline label', 'arrondisst': 'inline label', 'village_ad': 'inline label', 'nom_enq': 'inline label', });
lyr_infrastructure_de_sante_3.set('fieldLabels', {'type': 'inline label', 'nature': 'inline label', 'nom_san': 'inline label', });
lyr_Route_Abomey_4.set('fieldLabels', {'num_route': 'inline label', 'type': 'inline label', 'cl_admin': 'inline label', 'revetement': 'inline label', 'shape_leng': 'inline label', });
lyr_Riviere_Abomey_5.set('fieldLabels', {'nom_ce': 'inline label', 'type': 'inline label', 'regime': 'inline label', 'shape_leng': 'inline label', });
lyr_Riviere_Abomey_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});