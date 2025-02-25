export const cart =[]; 

export function addToCart(productId){
    let matchingItem;
  
        cart.forEach((cartItem) => {
          if(productId === cartItem.productId) {
              matchingItem = cartItem;
          }
        })
  
        if (matchingItem) {
          matchingItem.quanity += 1;
        } else {
          cart.push({
              productId: productId,
              quanity: 1
            });
        }
  }