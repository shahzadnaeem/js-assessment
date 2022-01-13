exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this,arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(second) {
      return str + ', ' + second;
    };
  },

  makeClosures: function(arr, fn) {
    let fns = [];

    for ( let i = 0; i < arr.length; i ++ ) {
      fns.push( function(j) {
          return function() { return fn(arr[j]); }
      }( i ) );
    }

    return fns;
  },

  partial: function(fn, str1, str2) {
    return function(suffix) {
      return fn.call(this,str1,str2,suffix);
    }
  },

  useArguments: function() {
    let res = 0;

    for ( let i in arguments ) {
      res += arguments[i];
    }

    return res;
  },

  callIt: function(fn) {
    let argsPassed = arguments.length;

    if ( fn.length === ( argsPassed - 1 )) {
      var args = Array.prototype.slice.call(arguments);
      args.shift();

      fn.apply(this,args);
    } else {
      //return false;
    }
  },

  partialUsingArguments: function(fn) {
    let suppliedArgs = Array.prototype.slice.call(arguments);
    suppliedArgs.shift();

    return function() {
      var args = Array.prototype.slice.call(arguments);

      for( let arg in args ) {
        suppliedArgs.push(args[arg]);
      }

      return fn.apply(this,suppliedArgs);
    }
  },

  curryIt: function(fn) {

  }
};
