import { Brand } from '../../components'
import { Lv ,zara ,Dg,chanel,gucci, nike , asus ,puma,hurley,samsung } from '../../assets'

const Brands = () => {
  return (
    <div className='relative h-[5rem] w-full overflow-hidden py-2 md:h-[15rem]'>
      <div className='brands flex items-center absolute w-[200%] left-0 top-[50%] translate-y-[-50%] '>
        <div className='grid grid-flow-col grid-flow-col-[10%] overflow-hidden'>
         
          <Brand urImg={zara} />
          <Brand urImg={Dg} />
          <Brand urImg={chanel} />
          <Brand urImg={nike} />
          <Brand urImg={gucci} />
          <Brand urImg={asus} />
          <Brand urImg={puma} />
          <Brand urImg={hurley} />
           <Brand urImg={Lv} />
          <Brand urImg={samsung} />
        </div>
        <div className='grid grid-flow-col grid-flow-col-[10%] overflow-hidden'>
         
          <Brand urImg={zara} />
          <Brand urImg={Dg} />
          <Brand urImg={chanel} />
          <Brand urImg={nike} />
          <Brand urImg={gucci} />
          <Brand urImg={asus} />
          <Brand urImg={puma} />
          <Brand urImg={hurley} />
           <Brand urImg={Lv} />
          <Brand urImg={samsung} />
        </div>
        
      </div>
    </div>
  )
}

export default Brands