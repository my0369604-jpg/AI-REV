import React from 'react'
import { CartProvider, useCart } from 'react-use-cart'

function cart(){
const {items,updateItemQuantity,removeItem,totalItems,totalUniqueItems,cartTotal,emptyCart,isEmpty} =useCart();

    return(
        <div>

        </div>
    )
}


function AllCart() {
  return (
    <CartProvider>

        
<cart/>

    </CartProvider>
  )
}

export default AllCart