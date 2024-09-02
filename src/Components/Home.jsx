import React, { useEffect, useState } from 'react'
import Coin from './Product';
import axios from 'axios'
import Loader from './Loader';

const Home = () => {

       const [coins,setCoins] = useState([]);
       const [loading , setLoading] = useState(true);

          useEffect(() => {
            
            const fetchAllCoins = async()=>{
              try{
                const {data} = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=200');
              console.log(data);
              
              setCoins(data);
              setLoading(false);
              }
              catch{
               alert('Not working')
              }
            }
            fetchAllCoins();

          }, [])
          

  return (
    <>
   { loading?
   ( 
   <Loader/> 
   ):
    (<div className='home' >
          {coins.map((i)=>(
                    <Coin imgSrc={i.image} name={i.name} symbol={i.symbol} key={i.id} price={i.current_price} />
          ))}
    </div>)
    }
    </>
  )
}

export default Home