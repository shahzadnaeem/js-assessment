exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let current = start;
    let running = true;
    let timer;

    function cancel() {
      if ( running ) {
        clearTimeout(timer);
      }

      running = false;
    }

    function tick() {
      const delay = 100;

      console.log(current++);

      if ( current <= end ) {
        timer = setTimeout( tick, delay);
      } else {
        running = false;
      }
    }

    tick();

    return {
      cancel: cancel
    }
  }
};
