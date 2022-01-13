exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    let files = [];

    function doList(files, data, dirName ) {

      let doAdd = true;
      if ( dirName ) {
        doAdd = data.dir === dirName;
        if ( doAdd ) {
          dirName = false;
        }
      }

      for ( let item of data.files ) {
        if ( typeof item === 'string' ) {
          if ( doAdd ) {
            files.push(item);
          }
        } else {
          doList( files, item, dirName );
        }
      }
    }

    doList(files, data, dirName);

    return files;
  },

  permute: function(arr) {
    let res = [];

    function doPermute(items, head, results) {
      for ( let i = 0; i < items.length; i ++ ) {
        let newHead = head.slice();
        let newItems = items.slice();

        newHead.push(items[i]);
        newItems.splice(i,1);

        if ( newItems.length > 0 ) {
          doPermute(newItems, newHead, results)
        } else {
          results.push(newHead);
        }
      }
    }

    if ( arr.length ) {
      doPermute(arr, [], res);
    }

    return res;
  },

  fibonacci: function(n) {
    if ( n === 0 ) return 0;
    if ( n === 1 ) return 1

    return this.fibonacci(n - 1) + this.fibonacci( n - 2 );
  },

  validParentheses: function(n) {

  }
};
