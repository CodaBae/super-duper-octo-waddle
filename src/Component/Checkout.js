import { useEffect, useState } from 'react'
import { PaystackButton } from 'react-paystack'

import MC from '../Assets/MC.png'
const Checkout = ({sum}) => {
    const [ship, setShipFee] = useState(0)
    const initialValues= {
        name:'',
        email:'',
        phone:'',
        card:'',
        cvv:'',
        exp:''    
    }
   const [values, setValues] = useState(initialValues)

    let total = parseInt(sum + ship)
    let amount = total * 100
    const publicKey = process.env.REACT_APP_PAYMEMNT_KEY

    const componentProps = {
        email: values.email,
        amount,
        metadata: {
          name : values.name,
          phone : values.phone,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
          alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("shop more"),
      }

    useEffect(()=>{

        const shipCal = (total) =>{

            let result =  (total/100) * 10
    
            setShipFee(result)
    
        }
    
        shipCal(sum)    
    
    })

    const handleInputChange  = (e) => {
        const {name,value} = e.target

        setValues({
            ...values,
            [name]:value
        })

    }

    return (
        <div>
            <h1>Card Details</h1>
            <div>
                <p>Card Types</p>
                <div>
                    <img src={MC} alt='mc image' />
                </div>
                <div>
                    <form>
                        <div>
                            <label>name on card</label>
                            <input name='name' type='text' placeholder='name' value={values.name} onChange={handleInputChange}/>
                        </div>
                        <div>
                            <label>email </label>
                            <input name='email' type='text' placeholder='email' value={values.email} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>phone</label>
                            <input name='phone' type='text' placeholder='phone' value={values.phone} onChange={handleInputChange}/>
                        </div>
                        <div>
                            <label>card number</label>
                            <input name='card' type='number' placeholder='11111 1111 1111' value={values.card} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>expiration date</label>
                            <input name='exp' type='date' placeholder='02/32' value={values.exp} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>cvv</label>
                            <input name='cvv' type='text' placeholder='233' onChange={handleInputChange} value={values.cvv} />
                        </div>
                    </form>
                </div>
                <div>
                    <div>
                        <h3> subTotal </h3>
                        <h3>${sum}</h3>
                    </div>
                    <div>
                        <h3> shipping </h3>
                        <h3>${ship}</h3>
                    </div>
                    <div>
                        <h3> Total(Tax) </h3>
                        <h3>${sum + ship}</h3>
                    </div>
                </div>
                <div>
                    
                     <PaystackButton {...componentProps} />
                </div>
            </div>
        </div>
    )
}

export default Checkout