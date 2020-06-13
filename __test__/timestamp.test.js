const timestamp = require('../middleeware/timestamp');

describe('timestamp middleware', () => {

  let req = {};
  let res = {};
  let next = jest.fn();
  let date = new Date();
  let setTime =date.toLocaleDateString();

  it ('add requestTime', ()=> {
    timestamp(req, res, next);
    expect(req.requestTime).toEqual(setTime);
  });

  it('show next ', ()=> {
    timestamp(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });


});