const  AppReducer = (state,action)=>{
    console.log(state,action)
    switch(action.type1){
        case "Counter_INC":
            return{
                ...state,
                count : state.count+1
            }
        case "Counter_Dec":
                return{
                    ...state,
                    count : state.count-1
                }

        case "add_New_User":
            return{
                ...state,
                user: [...state.user,action.data]
            }
        default:
            return state


    }
    // switch()
}
export default AppReducer
