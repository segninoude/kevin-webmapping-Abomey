var size = 0;
var placement = 'point';
function categories_Route_Abomey_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'BITUME':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,26,28,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PAVE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(152,76,36,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'NON_REVETU':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(150,37,225,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Route_Abomey_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("revetement");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Route_Abomey_4(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
