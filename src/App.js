import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Carditem from "./components/showcard/Carditem";

const CardData = [
  {
    title: "Orange",
    imageUrl: "https://thumbs.dreamstime.com/b/orange-fruit-i-25591488.jpg",
    price: "$40.00 - $80.00",
    quantity: 10,
  },
  {
    title: "Apple",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHqukWQSy4JaewEveDmtA5uKLHDwh054F3jGIhUojZB-L3tjRMt6Hpry3hSuwilINgxtQ&usqp=CAU",
    price: "$60.00 - $80.00",
    quantity: 10,
  },
  {
    title: "Mango",
    imageUrl:
      "https://images.hindustantimes.com/img/2021/06/25/550x309/9a156550-c367-11eb-9d53-2d5cae187b44_1624624374058.jpg",
    price: "$50.00 - $65.00",
    quantity: 10,
  },
  {
    title: "PineApple",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKti8XkB4Vd1QzYtKKFxrUXwiYPCd8gYr5AA&usqp=CAU",
    price: "$60.00 - $75.00",
    quantity: 10,
  },
  {
    title: "Kiwi",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQoNxtaUt8oVVgmjTDbl3uP49glO7ZjpA8w&usqp=CAU",  
    price: "$40.00 - $80.00",
    quantity: 10,
  },
  {
    title: "Guava",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrddk7YLrFj1bzadUhyDHETgmDm5ot2pK3w&usqp=CAU", 
    price: "$60.00 - $80.00",
    quantity: 10,
  },
  {
    title: "GreenApple",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ffZfOL8ck9ve3c1mVUz7f7VKCMoeqsslWQ&usqp=CAU",   
    price: "$40.00 - $80.00",
    quantity: 10,
  },
  {
    title: "Strawberry",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO8s38wNqoEZrbkbcH7QKK0tljWS_LZzwSzQ&usqp=CAU",    price: "$60.00 - $80.00",
    quantity: 10,
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {CardData.map((card, index) => (
              <Carditem
                key={`card-pricing-${index}`}
                data={card}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
