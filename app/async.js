exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise( (resolve, reject ) => {
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    return new Promise( (resolve, reject) => {
      fetch(url)
        .then( response => response.json() )
        .then( obj => {
          resolve( obj.people.map( v => v.name ).sort() );
        })
    });
  }
};
