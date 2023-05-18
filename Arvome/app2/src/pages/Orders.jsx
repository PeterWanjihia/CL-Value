import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

function Orders() {
  console.log(auth.currentUser);
  return (
    <div>
      Orders
      <button onClick={() => signOut(auth)}>Log out madafaka</button>
    </div>
  );
}

export default Orders;
