function samplePromise(){
    return Promise.resolve("Rinaldi")
}

async function run(){
    const name = await samplePromise()
    console.info(name)
}

run()