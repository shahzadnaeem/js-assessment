exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for ( let i = 0; i < arr.length; i++ ) {
      if ( arr[i] === item ) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    var res = 0;
    for ( let i = 0; i < arr.length; i++ ) {
      res += arr[i];
    }
    return res;
  },

  remove: function(arr, item) {
    let res = new Array();
    for ( let i in arr ) {
      if (arr[i] !== item) {
        res.push(arr[i]);
      }
    }
    return res;
  },

  removeWithoutCopy: function(arr, item) {
    let deleted = 0;
    let length = arr.length;

    for ( let i = 0; i < length; i ++ ) {
      if (arr[i-deleted] === item) {
        arr.splice(i-deleted,1);
        deleted++;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    return arr.slice(0,arr.length-1);
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    return arr.slice(1);

  },

  concat: function(arr1, arr2) {

    return arr1.concat(arr2);

    for ( let i = 0; i < arr2.length; i++ ) {
      arr1.push( arr2[i] );
    }

    return arr1;
  },

  insert: function(arr, item, index) {
    arr.splice( index, 0, item );

    return arr;
  },

  count: function(arr, item) {

    let num = 0;

    for ( let i = 0; i < arr.length; i++ ) {
      if ( arr[i] === item ) num++;
    }

    return num;
  },

  duplicates: function(arr) {

    // console.log( `${arr}` );

    let uniqs = [];

    // By hand
    arr.map( x => {
      if ( ! uniqs.includes( x ) ) {
        uniqs.push( x );
      }
    });

    // Nice Set based solution
    uniqs = [... new Set(arr)];

    let dups = uniqs.flatMap( x => {
      let items = arr.filter( y => y === x );

      // console.log( `${x} => ${items}` );

      if ( items.length > 1 ) {
        return [ x ];
      } else {
        return [];
      }
    });

    return dups;

  },

  square: function(arr) {
    return arr.map( x => x * x );
  },

  findAllOccurrences: function(arr, target) {
    let res = [];

    arr.forEach( ( v, i ) => {
      if ( v === target ) {
        res.push( i );
      }
    });

    return res;
  }
};
