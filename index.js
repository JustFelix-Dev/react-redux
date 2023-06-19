const redux = require('redux');
const createStore = redux.createStore
const CAKE_ORDERED = "CAKE_ORDERED";

function orderCake(){
    return{
        type : CAKE_ORDERED,
        quantity : 1
    }
}

initialState = {
    numOfCakes : 10,
    anotherProperty : 2
}

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state, 
                numOfCakes : state.numOfCakes - 1
            }
            default :
            return state
    }
}

const store = createStore(reducer)
console.log("InitialState:",store.getState())
const unsubscribe = store.subscribe(()=>{console.log("Update State:", store.getState())})
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())


unsubscribe()
store.dispatch(orderCake())
store.dispatch(orderCake())


