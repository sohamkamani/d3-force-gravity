const forceGravity = require('./index')

if (!window.d3) {
	console.error('This library requires d3. Please include the d3 library (https://d3js.org/)')
} else {
	window.d3.forceGravity = window.d3.forceGravity || forceGravity
}
