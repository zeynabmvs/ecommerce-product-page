function cartReducer(cart, action) {
    if (action.type === "addToCart") {
      const isAlreayInCart = cart.find(
        (item) => item.product.id === action.item.product.id
      );
      console.log("alresady", isAlreayInCart);
      if (!isAlreayInCart) return [...cart, action.item];
      return cart; //TODO: add new count to previous item
    } else if (action.type === "removeFromCart") {
      console.log("remove", action.index);
      return cart.filter((_, index) => index !== action.index);
    }
    return [];
  }
  

  export default cartReducer;