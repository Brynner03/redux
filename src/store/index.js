import { createStore } from 'redux'

export const INCREMENT = 'increment'

const initialState = { counter: 0, showCounter: true}

const counterReducer = (state = initialState , action) => {
    if (action.type === INCREMENT) {
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