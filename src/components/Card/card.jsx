import React from 'react'
// import "./Home.css"

const card = ({product}) => {
  return (
    <div key={product.id} className="card">
      <img src={product.image} />
      <div className="card_content">
        <p className="title">{product.title}</p>
        <p>$ {product.price}</p>
        <p>{product.rating.rate}</p>
      </div>
    </div>
  )
}

export default card
