import { hero1 , hero2 , hero3 } from "../../assets"
import { Link } from 'react-router-dom'
import {  HeroComponents }from '../../components' 

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 hero lg:h-[calc(100vh-8rem)] mt-8 px-16 md:px-20 lg:px-36">
      <div className="bg-cover bg-center h-[32rem] lg:h-full w-full flex flex-col justify-center gap-6 lg:gap-10 p-8 hero1"
         style={{
          backgroundImage:`url(${hero1})`,
        }}
      >
          <h1 className="text-4xl transition-all duration font-bold leading-normal lg:text-6xl ">
            <Link className="hover:text-[#3056D3] text-[#090E34]" to='/shop'>Mega Sale Up To 50% <br /> Off For All</Link>
          </h1>
          <p className="text-xl text-[#637381] lg:text-2xl font-medium md:w-[50ch]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque expedita, nostrum ipsa alias aperiam itaque blanditiis totam odio molestiae vel nihil vitae consequuntur enim quos. Atque voluptatibus hic dignissimos minima?</p>
          <button>
            <Link to='/' >
              shop now
            </Link>
          </button>
      </div>
      
       <div className="grid grid-cols-1 gap-8 lg:gap-4 md:grid-cols-2 lg:grid-cols-1 hero2">
         <HeroComponents
        img1={hero2}
        title='summer travel'
        subtitle='collection'
        link='discover now'
        
      />
      <HeroComponents
        img1={hero3}
        title='get off on'
        subtitle='iPhone'
        link='shop now'
        />
       </div>
      
    </div>
  )
}

export default Hero