(function(window, document, iframe, iframejson){
    "use strict";

    function isJSONy(obj) {
        return (obj.hasOwnProperty('parse') && obj.hasOwnProperty('stringify'));
    }

    // http://stackoverflow.com/a/122190
    function clone(obj){
        if(obj === null || typeof(obj) !== 'object')
            return obj;

        var temp = obj.constructor(); // changed

        for(var key in obj)
            temp[key] = clone(obj[key]);
        return temp;
    }

    if (isJSONy(window.JSON))
        return window.JSON;

    iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    iframejson = clone(iframe.contentWindow.JSON);
    document.body.removeChild(iframe);

    window.JSON = isJSONy(iframejson) ? window.JSON || {} : iframejson;
    
})(this, document);