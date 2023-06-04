import { Lv ,zara ,Dg,chanel,gucci, nike , asus ,puma,hurley,samsung } from '../../assets'

type BrandProps = {
  urlImg:string
}

const Brand = ({urlImg}:BrandProps) => {
  return (
    <div className="w-full">
        <img src={urlImg} alt={urlImg} className="w-full aspect-video object-contain" />
    </div>
  )
}


const Brands = () => {
  return (
    <div className='relative h-[5rem] w-full overflow-hidden py-2 md:h-[15rem]'>
      <div className='brands flex items-center absolute w-[200%] left-0 top-[50%] translate-y-[-50%] '>
        
        <div className='grid grid-flow-col grid-flow-col-[10%] overflow-hidden'>
          <Brand urlImg={zara} />
          <Brand urlImg={Dg} />
          <Brand urlImg={chanel} />
          <Brand urlImg={nike} />
          <Brand urlImg={gucci} />
          <Brand urlImg={asus} />
          <Brand urlImg={puma} />
          <Brand urlImg={hurley} />
           <Brand urlImg={Lv} />
          <Brand urlImg={samsung} />
        </div>
        <div className='grid grid-flow-col grid-flow-col-[10%] overflow-hidden'>
          <Brand urlImg={zara} />
          <Brand urlImg={Dg} />
          <Brand urlImg={chanel} />
          <Brand urlImg={nike} />
          <Brand urlImg={gucci} />
          <Brand urlImg={asus} />
          <Brand urlImg={puma} />
          <Brand urlImg={hurley} />
          <Brand urlImg={Lv} />
          <Brand urlImg={samsung} />
        </div>
        
      </div>
    </div>
  )
}

export default Brands