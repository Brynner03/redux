import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true}

const counterSlice = createSlice({
    // Preparing a slice of ouy Global state
    name: 'counter', // setup a name
    initialState,
    // A map of all the reducers this slice needs
    reducers: {
        // Don't need to write if checks anymore. It will automatically check the state
        increment(state) {
            // Now we can mutate the state because we can't accidentally manipulate existing state. Redux toolkit uses another package that will clone existing state, create a new state object, keep all the state that we're not editing, and override the state that we ARE editing!
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.amount
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})
// ConfigureStore makes merging multiple reducers into one reducer easier
const store = configureStore({
    // Setup property name of our store. This can create a map of our reducers.
    // configureStore will merge all of them together.
    reducer: counterSlice.reducer 
})

export default store