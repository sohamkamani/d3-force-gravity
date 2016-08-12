'use strict';
import {expect} from 'chai';
import myModule from '../source/';


describe('My module', function(){
  it('Says hello world', () => {
    expect(myModule()).to.equal('Hello World!');
  });
});
