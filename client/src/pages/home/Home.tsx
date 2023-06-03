import { Brands, Hero, HomeProducts } from "../../components"

const Home = () => {
  return (
    <main className="flex flex-col gap-8">
       <Hero />
       <Brands />
       <HomeProducts />
    </main>
  )
}

export default Home