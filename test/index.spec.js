'use strict'
import { assert, expect } from 'chai'
import forceGravity from '../source/'


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
