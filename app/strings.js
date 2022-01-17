exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let res = '';
    let currChar = '';
    let currPart = '';
    let currPartChar = '';
    let currPartLen = 0;

    for (let i = 0; i < str.length; i++) {
      currChar = str[i];

      if ( currPartLen === 0 ) {
        currPart = currChar;
        currPartChar = currChar;
        currPartLen = 1;
      } else {
        if ( currPartChar === str[i] ) {
          currPart += currChar;
          currPartLen ++;
        } else {
          res += currPart.slice(0,amount);

          currPart = currChar;
          currPartChar = currChar;
          currPartLen = 1;
        }
      }
    }

    res += currPart.slice(0,amount);

    return res;
  },

  wordWrap: function(str, cols) {

    let words = str.split(' ');
    let res = '';

    let currLine = '';

    words.forEach(word => {
      if ( currLine.length + word.length > cols ) {
        res += ( '\n' + currLine );
        currLine = word;
      } else {
        currLine += ( ' ' + word );
      }
    });

    res += ( '\n' + currLine );

    return res.trimStart();
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
