
const initState = {
    selected: 0 ,

}
const navbarReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SELECT':

            console.log('el');
            return {
                ...state,
                selected : action.playload
            };
       
        default:
            return state;
    }
}


export default navbarReducer;