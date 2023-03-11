import { useState, useEffect } from "react"
import AddItem from "../Component/AddItem"
import Card from "../Component/Card"
import Checkout from "../Component/Checkout"
import axios from "axios"
import Data from "../Utils/data"

const ShopPage = () => {
    const [data, setData] = useState([])
    const [sum, setSum] = useState([])

    let APIKEY = process.env.REACT_APP_API_KEY

    useEffect(()=>{
      const getFunction =  async() => {
        let res = await axios.get(APIKEY)
        setData(res.data)
      }
      getFunction()

      const sumAmount = (array) =>{
        let sum = 0
        array.map((item)=>{
          sum += item.price
        })
  
        setSum(sum) 
      }
      sumAmount(data)

    })

  
    return (
        <div className='shop_div'>
            <div style={{width: '50%'}}>
                <AddItem />

               {data.map((item)=> <Card item={item} />)}
            </div>
            <div style={{width: '40%'}}>
            <Checkout sum={sum} />

            </div>

        </div>
    )
}

export default ShopPage