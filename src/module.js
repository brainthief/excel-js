console.log('module.js')

async function start() {
 return await Promise.resolve('waiting async')
}

start().then(console.log)
