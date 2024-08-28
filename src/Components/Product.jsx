import React from 'react'
import {useParams} from 'react-router-dom'
const Product = ({value}) => {

          const params = useParams()

  return (
    <>
    <div>
          <h1>{value}</h1>
    </div>
    </>
  )
}

export default Product