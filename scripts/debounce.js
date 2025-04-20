const debounce = (fn, delay) => {
    console.log('debounce');
    const isRunning = false;
    if (!isRunning) {
        isRunning = true;
        return (...args) => {
            timer = setTimeout(() => fn(args), delay);
        }
    } else {
        clearTimeout(timer);
        isRunning = false;
    }
}

const sayHi = (name) => console.log(`Hi #{name}`);

debounce(sayHi, 3000)

