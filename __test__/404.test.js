'use strict';

function notFound(req, res, next) {

  res.status(404);

  res.send({err: 'not found'});
}

module.exports = notFound;