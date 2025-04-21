const sum = (a) => (b) => a + b;

const controller = new AbortController();
const signal = controller.signal;

const promise = new Promise((resolve, reject) => setTimeout(() => {
  if (signal.aborted) {
    reject(new Error("Promise was aborted"));
  } else {
    resolve("Resolved!")
  }
}, 2000));

// setTimeout(() => controller.abort(), 1000); // ncomment to see rejected 

promise.then(v => console.log("first", v)).catch(v => console.log(v));
promise.then(v => console.log("second", v)).catch(v => console.log(v));
promise.then(v => console.log("third", v)).catch(v => console.log(v));

async function f() {
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve('Promise resolved!'), 1000)
  });

  let result = await promise; // waits for 1 second, until the promise resolves

  console.log('will it be called')
  console.log(result); // will print 'Promise resolved!'
}

f();

console.log('after f');

const getPopulation = async function (country) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)
  const data = await response.json();
  console.log({ data })
  console.log(`${(+data[0].population / 1000000).toFixed(1)} million people live in ${data[0].name.common}`)
}

getPopulation('india');


