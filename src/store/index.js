import { createStore } from 'redux'
import { createSlice } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true}

createSlice({
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
        decrement(state) {},
        increase(state) {},
        toggleCounter(state) {}
    }
})

const counterReducer = (state = initialState , action) => {
    if (action.type === 'increment') {
        return {
            // NEVER MUTATE EXISTING STATE, ALWAYS OVERRIDE IT && RETURN NEW STATE
            // This can lead to bugs, and can have unwanted side-effects in bigger applications.
            counter: state.counter + 1,
            //  Always update every state when updating one state!
            showCounter: state.showCounter
        }
    }

    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'decrease') {
        return {
            counter: state.counter - action.amount,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }

    return state

}

const store = createStore(counterReducer)

export default store