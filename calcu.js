function multiply(){
    const args = Array.from(arguments);
    return args.reduce((acc, item) => {
        return acc * item;
    }, 1)
}

const total = multiply.apply(this, [2, 3, 4, 100000]);
console.log(total);

constructor?