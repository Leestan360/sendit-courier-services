import world from './world.svg';


const MidSection = () => {
    return ( 
        <div className="flex flex-col md:flex-row items-center md:justify-around mt-16 bg-indigo-50">
            <div>
                <img src={world} alt="" className='max-w-[400px] w-[100%]' />
            </div>
            <div className="flex flex-col text-slate-800 p-10 max-w-[500px] w-[100%] justify-around h-[300px]">
                <h1 className='font-open text-5xl font-bold'>Why SendIT ?</h1>
                <h3 className='font-jost'>We’ve partnered with some of the best in transportation services in Kenya to create a robust business model . Delivering to all over the world through our effective supply chain, use of modern technologies like geomapping , tracking , and autonomous technologies</h3>
            </div>
        </div>
    )
}
 
export default MidSection;