export function formatPrice(price, decimals = 2) {
  if (isNaN(price)) {
    console.log("Invalid price value.");
    return price;
  }

  return parseFloat(price).toFixed(decimals);
}
