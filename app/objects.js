// const { object } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.bind(obj)()
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting
  },

  iterate: function(obj) {
    let res = []

    for ( k in obj) {
      if ( obj.hasOwnProperty(k))
        res.push( `${k}: ${obj[k]}` )
    }

    return res
  }
};
