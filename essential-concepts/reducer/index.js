// reducers - helps us manage app state
// (state, action) => newState

// Pure function: 
// 1.Same inputs always return same outputs
// 2. No side-effects


function counterReducer(count, action ) {

    switch(action.type) {
        case 'INCREMENT': 
            return count + 1;
        case 'DECREMENT': 
            return count - 1;
        default: 
             return count;
    }

}

console.log(counterReducer(0, { type: 'INCREMENT'})); // 1
console.log(counterReducer(1, { type: 'DECREMENT'}));  // 0


const initialUser = {
    name: 'Mark',
    email: 'mark@example.com'
}

function userReducer(state, action) {
    switch(action.type){
        case 'CHANGE_NAME' :
            return { ...state, name:action.payload.name}
        case "CHANGE_EMAIL":
            return { ...state, email: action.payload.email };
        default:
            return state;
    }

}

const result = userReducer(initialUser, { type: 'CHANGE_NAME', payload: {name: 'joe'}})
console.log(result.name === 'joe')

const result2 = userReducer(initialUser, { type: 'CHANGE_EMAIL', payload: { email: 'mark@compuserve.com' } });
console.log(result2.email === 'mark@compuserve.com');

