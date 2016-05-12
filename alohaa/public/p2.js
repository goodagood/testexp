'use strict';
var promiseCount = 0;

function testPromise() {
    var thisPromiseCount = ++promiseCount;

    var log = console.log;

    log('beforeend', thisPromiseCount + ') Started (<small>Sync code started</small>)<br/>');

    // We make a new promise: we promise the string 'result' (after waiting 3s)
    var p1 = new Promise(
            function(resolve, reject) {
                log('beforeend', thisPromiseCount + ') Promise started (<small>Async code started</small>)<br/>');
                // This is only an example to create asynchronism
                window.setTimeout(
                    function() {
                        // We fulfill the promise !
                        resolve(thisPromiseCount);
                    }, Math.random() * 2000 + 1000);
            }
    );

    // We define what to do when the promise is resolved/fulfilled with the then() call,
    // and the catch() method defines what to do if the promise is rejected.
    p1.then(
        // Log the fulfillment value
        function(val) {
            log('beforeend', val + ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
        }
    ).catch(
        // Log the rejection reason
        function(reason) {
            console.log('Handle rejected promise ('+reason+') here.');
        }
    );

    //log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise made (<small>Sync code terminated</small>)<br/>');
    log('beforeend', thisPromiseCount + ') Promise made (<small>Sync code terminated</small>)<br/>');
}

testPromise();
