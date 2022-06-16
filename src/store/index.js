import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counter'
import authReducer from './auth'



// ConfigureStore makes merging multiple reducers into one reducer easier
// Only one root reducer, and one configureStore
const store = configureStore({
    // Setup property name of our store. This can create a map of our reducers.
    // configureStore will merge all of them together.
    reducer: { counter: counterReducer, auth: authReducer },
})

// Export our actions.


export default store