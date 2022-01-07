function sayHello(name){
    debugger
    return `Hello ${name}`
}

const name = "Eko"

console.info(sayHello(name))

/*
key debugger :

1. node inspect debugger.mjs
2. watch("name") => name merupakan variable. Untuk melihat isi variable
3. cont / c digunakan untuk continue execution
*/