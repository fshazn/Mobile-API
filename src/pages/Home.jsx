import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/navbar";
import "./Home.css";
import Card from "../components/Card/card"

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
         .then((result) => setProducts(result));
    //  .then((result) => console.log(result));
    getCategories();
  }, []);


  const getCategories = async () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
        .then((result) => setCategories(result));
      //.then((result) => console.log(result));
  };

  return (
    <div>
      <div>
        <Navbar />
        <div>
          {JSON.stringify(categories)}
        </div>
        <section className="product_grid">
          {products.map((product)=>{
            <Card key={product.id} product={product}/>
          })}
        </section>
      </div>
    </div>
  );
};

export default Home;
