import Image from "next/image";
import styles from "./checkout.module.css";

const Checkout = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.cartHeader}><span className={styles.cart}>Cart</span>/Checkout</h2>
      <h1 className={styles.checkoutHeader}>Checkout</h1>
      <h2>Shipping Information</h2>
      <form className={styles.form}>
        <div className={styles.namesdiv}>
           <input type="text" name="FirstName" placeholder="First name" className={styles.names} />
           <input type="text" name="LastName" placeholder="Last name"  className={styles.names}  />
        </div>
        
        <input type="text" name="Address" placeholder="Address" className={styles.address} />
        <div className={styles.statediv}>
                <input type="text" name="City" placeholder="city" className={styles.names}  />
                <input type="text" name="State" placeholder="state" className={styles.names}  />
        </div>
        
        <input type="text" name="Phone Number" placeholder="Phone number" className={styles.address} />
        <div className={styles.shippingaddress}>
        <input
          type="checkbox"
          name=""
          value="Use as my default shipping address"
          className={styles.checkbox}
        />
         <label for="checkbox">Use as my default shipping address</label>
        </div>
        
       
        <h2>Payment Information</h2>
        <div className={styles.radio}>
        <input type="radio" name="Credit or debit" /> 
        <label for="html">Credit or Debit Card</label>
        </div>
        <div className={styles.radio}>
        <input type="radio" name="Paypal" />  
        <label for="html">Paypal</label>
        </div>
        <div className={styles.radio}>
        <input type="radio" name="Google pay" /> 
        <label for="html">Google Pay</label>
        </div>
        <div className={styles.radio}>
        <input type="radio" name="Apple wallet" /> 
        <label for="html">Apple wallet</label>
        </div>
        
        
        <input type="text" name="Card number" placeholder="Card Number" className={styles.address} />
        <div className={styles.datediv}>
        <input type="date" name="date and time" className={styles.names} />
        <input type="text" name="CVV" placeholder="CVV" className={styles.names} />
        </div>
        <div className={styles.shippingaddress}>
        <input type="checkbox" name=""  />
        <label for="checkbox">Save credit card for later use.</label>
        </div>
        <div className={styles.shippingaddress}>
          <input type="checkbox" name="" />
           <label for="checkbox">Billing address same as shipping</label>
        </div>
        
      </form>
      <div className={styles.button}>
        <button className={styles.cancel}>Cancel</button>
        <button className={styles.newcard}>Add new Card</button>
      </div>
      <h1 className={styles.header}>Review order</h1>
      <div className={styles.cartItems}>
        <Image
          src="/ocean3.jpg"
          alt=""
          width={100}
          height={100}
          className={styles.image}
        />
        <div>
          <p>$15.99</p>
          <p>The Great Wave of Kanangwa</p>
        </div>
      </div>
      <div className={styles.calculations}>
        <h2 className={styles.subtotalHeader}>Subtotal(1)</h2>
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
      <button className={styles.orderbutton}>Place Order</button>
    </div>
  );
};

export default Checkout;
