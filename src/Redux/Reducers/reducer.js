
const INIT_STATE = {
    carts :[],
    products: [],
    loading:true,
    productLoader:false
   
}

export const cartReducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case "ADD_CART" :
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }

        case "RMV_CART":
            const data =  state.carts.filter((e)=>e.id !== action.payload);
            return {
                ...state,
                carts: data

            }
        case "SHOW_PRODUCT":
            return{
                ...state,
                products: action.payload,
                loading:false
            }
        case "ADD_PRODUCT":
            return{
                ...state,
                products:[action.payload, ...state.products],
                productLoader:true
            }
        case "DLT_PRODUCT":
            const NewProduct =  state.products.filter((e)=>e.id !== action.payload);
        return {
            ...state,
            products: NewProduct
        }
        case "EDIT_PRODUCT":
            const newData = state.products.map((e)=>{
                if(e.id === action.payload.id){
                   return action.payload;
                }
                return e;
            })
            return {
                ...state,
                products: newData
            }
        default: 
            return state
    }
}