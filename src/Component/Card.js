import CardImg from '../Assets/cardimg.png'
import TrashIcon from '../Assets/TrashCan.png'

const Card = ({item}) =>{
    return (
        <div className='card_div'>
            <div>
                <img src={CardImg} alt="card inage"/>
            </div>
            <div>
                <h2>{item.name}</h2>
                <p>{item.type}</p>
            </div>
            <div>
                <h1>{item.quantity ? item.quantity : 1}</h1>
            </div>
            <div>
                <h1>{`$${item.price}`}</h1>
            </div>
            <div>
                <img src={TrashIcon} alt='trash icon ' />
            </div>

        </div>
    )
}

export default Card