const redux = require('redux')
//importing redux


//creating a store
const createStore=redux.createStore


//Initial state
const initialState={
    friends:255,
    online:false,
    newMessages:6
}



//Reducer
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'IS_ONLINE':
            return {
                ...state,
                online:true
            }
        case 'ADD_A_FRIEND':
            return {
                ...state,
                friends:state.friends+1
            }
        case 'READ_A_MESSAGE':
            return {
                ...state,
                newMessages:state.newMessages-1
            }
        default :{
            return state
        }
    }

}


//Action creators
function isOnline(){
    return {
        type:'IS_ONLINE'
    }
}
function addFriend(){
    return {
        type:'ADD_A_FRIEND'
    }
}
function readMessage(){
    return {
        type:'READ_A_MESSAGE'
    }
}

//here we create a state tree of our application with createStore method 
const store=createStore(reducer)
console.log("This is the initial state of our application",store.getState())



//the dispatch method dispatches actions attributing the store. Here we are dispatching the readmessage action
//store.dispatch(readMessage())
console.log("After dispatch method call",store.getState())




//subscribe method:
//The store.subscribe() method subscribes us to a store and adds a onchange event listner. In simple words on every change the subscribe method will call a function passed as an argument
const changeListner=store.subscribe(()=>console.log('state updated',store.getState()))

//the subscribe method returns unsubscribe functions ,so calling it will unsubscrible us from the listner
//changeListner()

//working

store.dispatch(isOnline())
store.dispatch(addFriend())
store.dispatch(addFriend())
store.dispatch(readMessage())
store.dispatch(readMessage())
store.dispatch(readMessage())
store.dispatch(isOnline())
changeListner()