const redux = require('redux')

const counterReducer = (state = { counter: 0 }, action) => {

    if (action.type === 'increment') {
            return {
                counter: state.counter + 1
            }
    }

    return state
    
}

const store = redux.createStore(counterReducer)

const counterSubscriber = () => {
    // Gives us the latest state after it was changed.
    const latestState = store.getState()
    console.log(latestState)
}

// Expects a function that redux executes whenever data in the form changes
store.subscribe(counterSubscriber)

store.dispatch({ type: 'increment' })