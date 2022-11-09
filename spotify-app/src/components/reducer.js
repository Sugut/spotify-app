// initial state of the data layer  
export const initialState ={
    user:null,
    playlist:[],
    playing:false,
    item:null,
    token:"BQBIsquIk-GIC3459erMqvfvYl59axPLb_OLGeSeKulVDHzvgSHWpTWoYpRIEDIpHftqhgAS5r8K7IHEGJievBhKeczsYv0YrVslbmCgp0pIQT3yTIzqUjCA40khSnc5AA5Ej8Dba4NuRj3PTjETob6SmS7aVMTuYEJMxTQon2yKMQYjaKZQey0H9Ba1a0FVhTKZtTILtNWBW2bI2rko"
}

const reducer=(state, action)=>{
    console.log(action)
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user
            };
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            }    
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists
            } 
        case "SET_DISCOVER_WEEKLY":  
            return{
                ...state,
                discover_weekly: discover_weekly
            }         
            default:
                return state    
    }
}
export default reducer;