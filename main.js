'use strict';

function Pointer(elementId) {
	this.element = document.getElementById(elementId);
	console.log('Element: ', this.element);
}
Pointer.prototype.setRotation = function(rotation) {
	this.element.style.transform = `rotate(${rotation}deg)`;
}
Pointer.prototype.getMinRotation = function() {
	return parseInt(this.element.getAttribute('data-minRotation')) || -75;
}
Pointer.prototype.getMaxRotation = function() {
	return parseInt(this.element.getAttribute('data-maxRotation')) || 180;
}

var pointers = {
	main: new Pointer('mainclock'),
	left: new Pointer('subclock_left'),
	right: new Pointer('subclock_right')
};

var timer = setInterval(function() {
	var randomRotation;
	var minRotation;
	var maxRotation;
	var rotation;
	for(var pointer in pointers) {
		minRotation = pointers[pointer].getMinRotation();
		maxRotation = pointers[pointer].getMaxRotation();
		if(minRotation >= 0) {
			rotation = Math.floor(Math.random() * (maxRotation + minRotation)) - minRotation;
		} else {
			rotation = Math.floor(Math.random() * (maxRotation + -minRotation)) - -minRotation;
		}
		pointers[pointer].setRotation(rotation);
	}
}, 2000);