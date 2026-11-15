import { useContext, useState } from "react";
import { AppContext } from "../AppProvider";

function Cart() {
  const data = useContext(AppContext);

  const [deliveryWay, setDeliveryWay] = useState("Pickup");

  let total = 0;

  for (let i = 0; i < data.cart.length; i++) {
    total = total + data.cart[i].price;
    // total.toFixed(2);
    total = Number(total.toFixed(2));
  }

  function removeItem(index) {
    data.setCart(data.cart.filter((item, i) => i != index));
  }

  function placeOrder() {
    data.setOrder([
      ...data.order,
      {
        id: Date.now(),
        items: data.cart,
        deliveryType: deliveryWay,
        total: total,
        status: "Preparing",
      },
    ]);
    data.setCart([]);
  }

  return (
    <div className="page">
      <h1>Cart</h1>

      <div className="menu-grid">
        {data.cart.map((item, index) => (
          <div key={index} className="menu-card">
            <img src={item.image} />
            <p>
              {item.name} - {item.price} - {item.category}
            </p>
            <button onClick={() => removeItem(index)}>Remove</button>
          </div>
        ))}
      </div>

      <h3>Total : ${total}</h3>

      <select
        value={deliveryWay}
        onChange={(e) => setDeliveryWay(e.target.value)}
      >
        <option>Pickup</option>
        <option>Delivery</option>
      </select>

      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}

export default Cart;
