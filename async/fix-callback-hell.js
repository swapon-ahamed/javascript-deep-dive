// State of Promise

// 1. pending
// 2. fulfilled
// 3. rejected

const promise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        // resolve('done')
        reject('rejected!')
    }, 1000);
})

promise
    .then( value => console.log(value))
    .catch( error => console.error(error))
    .finally( () => console.log('Finished'));


// const promise = new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject); 
//  });
 
//  promise
//    .then(position => console.log(position))
//    .catch(error => console.error(error))
//    .finally(() => console.log('done'));
