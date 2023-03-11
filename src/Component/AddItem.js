import {useState} from 'react'
import axios from 'axios'

// CRUD -> CREATE
const AddItem = () => {
    const initialValues = {
        name: '',
        type:'',
        price: '',
        quantity: ''

    }
    const [values, setValues] = useState(initialValues)

    let APIKEY = process.env.REACT_APP_API_KEY
    const handleSubmit = async(e) => {
        e.preventDefault()
        let res = await axios.post(APIKEY,values)
        console.log(res)
        setValues(initialValues)
    }
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name] : value
        })
    }
    return(
        <form style={{margin:'5%'}} onSubmit={handleSubmit}>
            <input name='name' type='text' placeholder="Item" value={values.name} onChange={handleInputChange}/>
            <input name='type' type='text' placeholder="type" value={values.type} onChange={handleInputChange}/>
            <input name='price' type='number' placeholder="price" value={values.price} onChange={handleInputChange}/>
            <input name='quantity' type='number' placeholder="quantity" value={values.quantity} onChange={handleInputChange}/>

            <button>SEND</button>

        </form>
    )

}

export default AddItem