

// Returns a promise
function getLater() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0) { // impossible for now
        reject(new Error("It eventually broke"));
      } else {
        resolve(42);
      }
    }, 1000);
  });
}

// Invokes the promise
function doWithPromise() {
  getLater()
    .then(function (later) {
      console.log('promised:', later);
    })
    .catch(function (err) {
      console.log('promised err:', err);

    });
}

// Awaits the promise
async function doWithAsyncAwait() {
  var later = await getLater();
  console.log('awaited:', later);
}

console.log('First promise, then await');
doWithPromise();
doWithAsyncAwait();
