import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux' 

const loggerMiddleware = createLogger()

const middleware = [thunk, loggerMiddleware]

const finalCreateStore = compose(
    applyMiddleware(...middleware),
)(createStore)

export default finalCreateStore