'use strict'
const {assert, expect} = require('chai')
const forceGravity = require('../source/')


describe('Force Gravity', function() {
	it('Should return a force instance', () => {
		const force = forceGravity()
		assert.deepEqual(Object.keys(force), ['strength', 'minRadius', 'x', 'y', 'initialize'])
	})

	it('Should be able to chain methods', () => {
		const force = forceGravity().strength(0).minRadius(0).x(0).y(0)
		assert.deepEqual(Object.keys(force), ['strength', 'minRadius', 'x', 'y', 'initialize'])
	})

	it('Should set x and y from initial arguments', () => {
		const force = forceGravity(10, 20)
		expect(force.x()).to.equal(10)
		expect(force.y()).to.equal(20)
	})

	describe('Core', function() {

		it('modifies x and y position according to gravity physics', () => {
			const force = forceGravity(100, 100)
			const nodes = [{
				x: 0,
				y: 0,
				vx: 0,
				vy: 0
			}]
			force.initialize(nodes)
			force()
			expect(nodes[0].x).to.equal(0.35355339059327373)
			expect(nodes[0].y).to.equal(0.35355339059327373)
			force()
			expect(nodes[0].x).to.equal(1.0594101717798212)
			expect(nodes[0].y).to.equal(1.0594101717798212)
		})
	})

	describe('strength', function() {
		const force = forceGravity()

		it('should return strength when no arguments given', () => {
			expect(force.strength()).to.equal(10000)
		})

		it('should set strength when arguments given', () => {
			force.strength(2000)
			expect(force.strength()).to.equal(2000)
		})

		it('should throw error if non number argument given', () => {
			expect(() => force.strength('2')).to.throw(TypeError)
		})
	})

	describe('minRadius', function() {
		const force = forceGravity()

		it('should return minRadius when no arguments given', () => {
			expect(force.minRadius()).to.equal(40)
		})

		it('should set minRadius when arguments given', () => {
			force.minRadius(2000)
			expect(force.minRadius()).to.equal(2000)
		})

		it('should throw error if non number argument given', () => {
			expect(() => force.minRadius('2')).to.throw(TypeError)
		})
	})

	describe('x', function() {
		const force = forceGravity()

		it('should return x when no arguments given', () => {
			expect(force.x()).to.equal(0)
		})

		it('should set x when arguments given', () => {
			force.x(2000)
			expect(force.x()).to.equal(2000)
		})

		it('should throw error if non number argument given', () => {
			expect(() => force.x('2')).to.throw(TypeError)
		})
	})

	describe('y', function() {
		const force = forceGravity()

		it('should return y when no arguments given', () => {
			expect(force.y()).to.equal(0)
		})

		it('should set y when arguments given', () => {
			force.y(2000)
			expect(force.y()).to.equal(2000)
		})

		it('should throw error if non number argument given', () => {
			expect(() => force.y('2')).to.throw(TypeError)
		})
	})
})
