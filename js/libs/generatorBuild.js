'use strict';

var IdGenerator = require('./generator');
var generator;

var exports = module.exports = function generateAutoId (now) {
    if (!generator) generator = new IdGenerator()
    return generator.generate(now);
};

exports.Generator = IdGenerator;