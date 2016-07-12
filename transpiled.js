

// Awaits the promise

let doWithAsyncAwait = (() => {
  var _ref = _asyncToGenerator(function* () {
    var later = yield getLater();
    console.log('awaited:', later);
  });

  return function doWithAsyncAwait() {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

// Returns a promise
function getLater() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0) {
        // impossible for now
        reject(new Error("It eventually broke"));
      } else {
        resolve(42);
      }
    }, 1000);
  });
}

// Invokes the promise
function doWithPromise() {
  getLater().then(function (later) {
    console.log('promised:', later);
  }).catch(function (err) {
    console.log('promised err:', err);
  });
}

console.log('First promise, then await');
doWithPromise();
doWithAsyncAwait();

