'use strict';




const logCheck = require('../middleeware/logger');

describe('logger middleware', () => {

  let spy;
  let req = {};
  let res = {};
  let next = jest.fn();
 
  beforeEach(()=> {
    spy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(()=> {
    spy.mockRestore();
  });

  it ('test the result', ()=> {
    logCheck(req, res, next);
    expect(spy).toHaveBeenCalled();
  });

  it('show the next ', ()=> {
    logCheck(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });


});