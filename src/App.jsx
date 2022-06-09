import Cart from "./Cart/Cart";
import Comment1 from "./Comment/Comment";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
function App() {
  const [user, setUser] = useState(0);
  const [Payment, SetPayment] = useState([]);
  const [ChangeCart, SetChangeCart] = useState(0);
  function ChangedataCart() {
    SetChangeCart(ChangeCart + 1);
  }
  function Change(newData) {
    SetPayment(newData);
  }
  function Store(newData) {
    setUser(newData);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/Cart"
            element={
              <Cart
                ChangedataCart={ChangedataCart}
                Store={Store}
                Change={Change}
              />
            }
          />
          <Route path="/Comment" element={<Comment1 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
