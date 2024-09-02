import React from 'react'
const Coin = ({name,symbol,imgSrc,price}) => {

  return (
    <>
    <div className='coin' >
      <img src={imgSrc} alt={name} />
      <h1>{symbol}</h1>
      <p>{name}</p>
      <p>{price}</p>
    </div>
    </>
  )
}

export default Coin