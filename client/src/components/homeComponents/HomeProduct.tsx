// import { bag } from '../../assets'
// import {BsStarFill ,BsStar} from 'react-icons/bs'
// import {Link} from 'react-router-dom'
import storeItems from '../../data/items.json'
import { ProductItem } from '../../components'

const HomeProduct = () => {
  return (
    <div className='homeProduct'>
       
        {storeItems.map(item=>(
            <div key={item.lists[0].id}>
                <ProductItem {...item.lists[0]}/>
            </div>
        ))}
       
    </div>
  )
}

export default HomeProduct