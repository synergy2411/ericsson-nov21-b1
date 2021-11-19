// const logger = (store) => (next) => (action) => {}

function logger(store){
    return function(next){
        return function(action){
            // Write Async Code here
            // setTimeout(()=>{
            // }, 3000)
            console.log("[LOGGER-ACTION]", action)
            console.log("[LOGGER-STATE]", store.getState())
            return next(action)
        }
    }
}

export default logger;