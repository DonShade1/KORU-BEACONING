ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32736").setExtent([748740.422415, 9982209.174186, 750951.560941, 9983314.743449]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KORUPOLGON_1 = new ol.format.GeoJSON();
var features_KORUPOLGON_1 = format_KORUPOLGON_1.readFeatures(json_KORUPOLGON_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_KORUPOLGON_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KORUPOLGON_1.addFeatures(features_KORUPOLGON_1);
var lyr_KORUPOLGON_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KORUPOLGON_1, 
                style: style_KORUPOLGON_1,
                interactive: false,
                title: '<img src="styles/legend/KORUPOLGON_1.png" /> KORU POLGON'
            });
var format_OLDBEACONS_2 = new ol.format.GeoJSON();
var features_OLDBEACONS_2 = format_OLDBEACONS_2.readFeatures(json_OLDBEACONS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_OLDBEACONS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OLDBEACONS_2.addFeatures(features_OLDBEACONS_2);
var lyr_OLDBEACONS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OLDBEACONS_2, 
                style: style_OLDBEACONS_2,
                interactive: false,
                title: '<img src="styles/legend/OLDBEACONS_2.png" /> OLD BEACONS'
            });
var format_NEWBEACONS_3 = new ol.format.GeoJSON();
var features_NEWBEACONS_3 = format_NEWBEACONS_3.readFeatures(json_NEWBEACONS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_NEWBEACONS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NEWBEACONS_3.addFeatures(features_NEWBEACONS_3);
var lyr_NEWBEACONS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NEWBEACONS_3, 
                style: style_NEWBEACONS_3,
                interactive: false,
                title: '<img src="styles/legend/NEWBEACONS_3.png" /> NEW BEACONS'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_KORUPOLGON_1.setVisible(true);lyr_OLDBEACONS_2.setVisible(true);lyr_NEWBEACONS_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KORUPOLGON_1,lyr_OLDBEACONS_2,lyr_NEWBEACONS_3];
lyr_KORUPOLGON_1.set('fieldAliases', {'Id': 'Id', 'AREAS': 'AREAS', 'AREA_HA': 'AREA_HA', 'NAMES': 'NAMES', });
lyr_OLDBEACONS_2.set('fieldAliases', {'Id': 'Id', });
lyr_NEWBEACONS_3.set('fieldAliases', {'Id': 'Id', 'X': 'X', });
lyr_KORUPOLGON_1.set('fieldImages', {'Id': 'Range', 'AREAS': 'TextEdit', 'AREA_HA': 'TextEdit', 'NAMES': 'TextEdit', });
lyr_OLDBEACONS_2.set('fieldImages', {'Id': 'Range', });
lyr_NEWBEACONS_3.set('fieldImages', {'Id': 'Range', 'X': '', });
lyr_KORUPOLGON_1.set('fieldLabels', {'Id': 'no label', 'AREAS': 'no label', 'AREA_HA': 'no label', 'NAMES': 'no label', });
lyr_OLDBEACONS_2.set('fieldLabels', {'Id': 'no label', });
lyr_NEWBEACONS_3.set('fieldLabels', {'Id': 'no label', 'X': 'no label', });
lyr_NEWBEACONS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});