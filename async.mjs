// javascript modules

function samplePromise(){
    return Promise.resolve("Rinaldi")
}

const name = await samplePromise()
console.info(name)