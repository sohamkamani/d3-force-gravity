(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var forceGravity = require('./index');

if (!window.d3) {
	console.error('This library requires d3. Please include the d3 library (https://d3js.org/)');
} else {
	window.d3.forceGravity = window.d3.forceGravity || forceGravity;
}
},{"./index":2}],2:[function(require,module,exports){
'use strict';

var assertNumber = function assertNumber(name, n) {
	if (typeof n !== 'number') {
		throw new TypeError(name + ' has to be a number');
	}
};

var ForceGravity = function ForceGravity() {
	var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	var nodes = void 0,
	    acceleration = void 0,
	    strength = 10000,
	    minRadius = 40;

	var distanceTo = function distanceTo(x1, y1, x2, y2) {
		return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
	};

	var computeAcceleration = function computeAcceleration(nx, ny, distance) {
		var distanceCube = Math.pow(distance, 3);
		return {
			x: (x - nx) * strength / distanceCube,
			y: (y - ny) * strength / distanceCube
		};
	};
	var initialize = function initialize(_) {
		nodes = _;
		acceleration = nodes.map(function (node) {
			var distance = distanceTo(x, y, node.x, node.y);
			return computeAcceleration(node.x, node.y, distance);
		});
	};

	var force = function force() {
		nodes.forEach(function (node, i) {
			var distance = distanceTo(x, y, node.x, node.y);
			if (distance < minRadius) {
				return;
			}
			node.vx += acceleration[i].x;
			node.vy += acceleration[i].y;
			node.x += node.vx;
			node.y += node.vy;
			var newAcceleration = computeAcceleration(node.x, node.y, distance);
			acceleration[i].x = newAcceleration.x;
			acceleration[i].y = newAcceleration.y;
		});
		return force;
	};

	force.strength = function (_strength) {
		if (_strength === undefined) {
			return strength;
		}
		assertNumber('strength', _strength);
		strength = _strength;
		return force;
	};

	force.minRadius = function (_minRadius) {
		if (_minRadius === undefined) {
			return minRadius;
		}
		assertNumber('minRadius', _minRadius);
		minRadius = _minRadius;
		return force;
	};

	force.x = function (_x) {
		if (_x === undefined) {
			return x;
		}
		assertNumber('x', _x);
		x = _x;
		return force;
	};

	force.y = function (_y) {
		if (_y === undefined) {
			return y;
		}
		assertNumber('y', _y);
		y = _y;
		return force;
	};

	force.initialize = initialize;
	return force;
};

module.exports = ForceGravity;
},{}]},{},[1]);
