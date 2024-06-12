const CartPage = () => {
  // onClick auf "addToCart"-Button das jeweilige Produkt zum Cart hinzufügen
  // zuerst abfragen, ob das Produkt im Warenkorb bereits vorhanden ist
  // dann den cart-State aktualisieren bzw ergänzen
  // const existingItem = cart.find((item) => (item.productId === productId))
  // if(existingItem){
  //     existingItem.amount++
  // } else {
  //     setCart({...cart, {productId, amount}})
  ////   oder: cart.push({productId, amount: 1})
  //   }
  // return {cart}

  return <h2>Show Cart</h2>;
};

export default CartPage;
