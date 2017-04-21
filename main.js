(function() {
	'use strict';

	function Pointer(elementId) {
		this.element = document.getElementById(elementId);
		this.minRotation = parseInt(this.element.getAttribute('data-minRotation')) || -75;
		this.maxRotation = parseInt(this.element.getAttribute('data-maxRotation')) || 180;
	}
	Pointer.prototype.setRotation = function(rotation) {
		this.element.style.transform = `rotate(${rotation}deg)`;
	}

	var pointers = [
		new Pointer('mainclock'),
		new Pointer('subclock_left'),
		new Pointer('subclock_right')
	];

	var timer = setInterval(function() {
		var randomRotation;
		var minRotation;
		var maxRotation;
		var rotation;
		for(var pointer of pointers) {
			if(pointer.minRotation >= 0) {
				rotation = Math.floor(Math.random() * (pointer.maxRotation + pointer.minRotation)) - pointer.minRotation
			} else {
				rotation = Math.floor(Math.random() * (pointer.maxRotation + -pointer.minRotation)) - -pointer.minRotation
			}
			pointer.setRotation(rotation);
		}
	}, 2000);
}());