export const Pay =({cardImg})=>{
  return (
    <>
      <img src={cardImg} alt={cardImg} className="rounded overflow-hidden w-16" />
    </>
  )
}

const FooterComponent = ({title}) => {
  return (
    <div>
        <h4 className="text-[#f5f5f5] capitalize text-3xl font-bold mb-8">{title}</h4>
    </div>
  )
}

export default FooterComponent