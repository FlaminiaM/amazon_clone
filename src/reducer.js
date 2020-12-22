export const initialState = {
    basket: [],
    user:null,
};

export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

  
const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state, 
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            //findIndex will return the first one that matches with the id, not all of them 
            const index = state.basket.findIndex(
                (basketItems) => basketItems.id === action.id
            );
            let newBasket =[...state.basket]
            if(index >= 0){
                newBasket.splice(index, 1);
            } else {
                console.warn(`can't remove product with (id: ${action.id}) as it's not on the basket`)
            }
            return {
                ...state, 
                basket:newBasket
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;