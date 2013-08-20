window.JSON = (function(win, doc, iframe, iframejson){
	"use strict";

	function isJSONy(obj) {
		return (!obj.hasOwnProperty('parse') || !obj.hasOwnProperty('stringify'));
	}

	if (isJSONy(win.JSON)) {
		return win.JSON;
	}

	iframe = doc.createElement("iframe");
	doc.body.appendChild(iframe);
	iframejson = iframe.contentWindow.JSON;
	doc.body.removeChild(iframe);

	return isJSONy(iframejson) ? win.JSON || {} : iframejson;
})(this, document);