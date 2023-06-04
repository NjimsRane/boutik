


import {BlogTitle,ProductItem} from '../../components'
import storeItems from '../../data/items.json'

const Products = () => {
  return (
    <div className='px-16 md:px-20 lg:px-36'>
      <BlogTitle title='store' />
      <div className='homeProduct'>
         {storeItems.map(item=>(
            <div key={item.lists[0].id}>
                <ProductItem {...item.lists[0]}/>
                <ProductItem {...item.lists[1]}/>
                <ProductItem {...item.lists[2]}/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Products