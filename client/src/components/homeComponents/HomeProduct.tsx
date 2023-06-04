
import storeItems from '../../data/items.json'
import { ProductItem } from '../../components'

const HomeProduct = () => {
  return (
    <div className='homeProduct'>
       
        {storeItems.map(item=>(
            <div key={item.lists[0].id}>
                <ProductItem {...item.lists[2]}/>
            </div>
        ))}
       
    </div>
  )
}

export default HomeProduct