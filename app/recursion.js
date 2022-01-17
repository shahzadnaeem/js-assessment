exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function (data, dirName) {
    let files = [];

    function doList(files, data, dirName) {

      let doAdd = true;
      if (dirName) {
        doAdd = data.dir === dirName;
        if (doAdd) {
          dirName = false;
        }
      }

      for (let item of data.files) {
        if (typeof item === 'string') {
          if (doAdd) {
            files.push(item);
          }
        } else {
          doList(files, item, dirName);
        }
      }
    }

    doList(files, data, dirName);

    return files;
  },

  permute: function (arr) {
    let res = [];

    function doPermute(items, head, results) {
      for (let i = 0; i < items.length; i++) {
        let newHead = head.slice();
        let newItems = items.slice();

        newHead.push(items[i]);
        newItems.splice(i, 1);

        if (newItems.length > 0) {
          doPermute(newItems, newHead, results)
        } else {
          results.push(newHead);
        }
      }
    }

    if (arr.length) {
      doPermute(arr, [], res);
    }

    return res;
  },

  fibonacci: function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1

    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  },

  validParenthesesBad: function (n) {

    let res = [];

    function doBrackets(n, curr, suffix, results) {
      if (n == 0) {
        let ans = curr + suffix;
        if ( ! results.includes( ans ) ) {
          results.push(ans);
        }
      } else {
        doBrackets(n - 1, "()" + curr, suffix, results);
        doBrackets(n - 1, "(" + curr, ")" + suffix, results);
        doBrackets(n - 1, curr, suffix + "()", results);
      }
    }

    if (n > 0) {
      doBrackets(n, "", "", res);
    }

    // console.log(res);

    return res;
  },

  validParentheses: function( n ) {
    let res = [];

    function genParens( left, right, str ) {

      if ( left === 0 && right === 0 ) {
        res.push( str );
      }

      if ( left > 0 ) {
        genParens( left-1, right+1, str+"(" );
      }

      if ( right > 0 ) {
        genParens( left, right-1, str+")" );
      }
    }

    genParens( n, 0, "" );

    console.log( res );

    return res;
  }
};
