import React from 'react'

const MyHeading = ({name,text,price=200}) => {

  return (
    <div><h1>{text}</h1>
          <MyHeading1 value={price} />
          <footer>{name}</footer>
    </div>
  )
}
const MyHeading1 = ({value}) => <div> {value}</div>;
        

// export default MyHeading

export {MyHeading1 , MyHeading};