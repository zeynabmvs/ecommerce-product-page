function cartReducer(cart, action) {
  if (action.type === "addToCart") {
    const isAlreayInCart = cart.find(
      (item) => item.product.id === action.item.product.id
    );
    if (!isAlreayInCart) {
      return [...cart, action.item];
    } else {
      console.log(isAlreayInCart);

      return cart.map((item) => {
        if (item.product.id === action.item.product.id) {
          console.log(item.product.inStock)
          if (item.product.inStock >= item.count + action.item.count) {
            return { ...item, count: item.count + action.item.count };
          }
        }
        return item;
      });
    }
  } else if (action.type === "removeFromCart") {
    return cart.filter((_, index) => index !== action.index);
  } else if (action.type === "emptyCart") {
    return [];
  }

  return [];
}

export default cartReducer;
