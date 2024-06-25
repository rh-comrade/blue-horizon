import init from "../init";

const appReducer = (state=init,action:any)=>{
    switch(action.type){
        case 'NAME_UPDATE':
            return {
                ...state,
                name: action.payload
            }
        default: return state;
    }
}
export default appReducer;