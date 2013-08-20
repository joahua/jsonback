window.JSON = (function(d,i,j){
	"use strict";
	i = d.createElement("iframe");
	d.body.appendChild(i);
	j = i.contentWindow.JSON;
	d.body.removeChild(i);

	return (!j.hasOwnProperty('parse') || !j.hasOwnProperty('stringify')) ? window.JSON || {} : j;
})(document);