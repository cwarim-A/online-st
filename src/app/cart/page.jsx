import Image from "next/image";
import styles from "./cart.module.css";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      src: "/ocean3.jpg",
      title: "The Great wall off Kanagwa",
      price: 15.99,
      quantity: 1,
    },
    {
      id: 2,
      src: "/ocean3.jpg",
      title: "The Great wall off Kanagwa",
      price: 15.99,
      quantity: 1,
    },
    {
      id: 3,
      src: "/ocean3.jpg",
      title: "The Great wall off Kanagwa",
      price: 15.99,
      quantity: 1,
    },
    {
      id: 4,
      src: "/ocean3.jpg",
      title: "The Great wall off Kanagwa",
      price: 15.99,
      quantity: 1,
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>My Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id} className={styles.cartItem}>
          <div className={styles.cartItems}>
            <Image
              src={item.src}
              alt=""
              width={100}
              height={100}
              className={styles.image}
            />
            <div>
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
          </div>
          <div className={styles.buttonsection}>
            <button className={styles.button}>-</button>
            <p className={styles.quantity}>{item.quantity}</p>
            <button className={styles.button}>+</button>
          </div>
        </div>
      ))}

      <div>
        <h2 className={styles.subtotalHeader}>Subtotal({cartItems.length})</h2>
        <div className={styles.subtotal}>
            <h3 className={styles.desc}>Subtotal</h3>
            <p>$63.96</p>
        </div>
        <div className={styles.subtotal}>
            <h3 className={styles.desc}>Estimated shipping</h3>
            <p>$0</p>
        </div>
        <div className={styles.subtotal}>
            <h3 className={styles.desc}>Tax</h3>
            <p>$0</p>
        </div>
        <div className={styles.subtotal}>
            <h3 className={styles.desc}>Total</h3>
            <p>$63.96</p>
        </div>
      </div>

      <div className={styles.checkoutbutton}>
        <button className={styles.shopping}>Continue Shopping</button>
        <button className={styles.cashout}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
