const promise = new Promise(function (resolve, reject) {
    resolve('hey!!')
});

const cows = 9;

const countcows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve('we have ' + cows + ' cows on the farm')
    } else (
        reject('we do not have ' + cows + ' cows on the farm')
    )
})

countcows.then((result) => {
    console.log(result);
}).catch(error => console.log(error)).finally(()=> console.log('finally'))