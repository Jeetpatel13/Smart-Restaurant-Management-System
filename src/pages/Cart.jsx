import { useContext, useState } from "react";
import { AppContext } from "../AppProvider";

function Cart() {
  const data = useContext(AppContext);

  const [deliveryWay, setDeliveryWay] = useState("");

  let total = 0;

  for (let i = 0; i < data.cart.length; i++) {
    total = total + data.cart[i].price;
    total.toFixed(2);
  }

  function removeItem(id) {
    data.setCart(data.cart.filter((item) => item.id != id));
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
        {data.cart.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.image} />
            <p>
              {item.name} - {item.price} - {item.category}
            </p>
            <button onClick={() => removeItem(item.id)}>Remove</button>
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
