const counter = (state=0,action) =>{
    switch(action.type){
        case 'ADD_COUNTER':
            return action.counter
        default:
            return state
    }
}

export default counter
