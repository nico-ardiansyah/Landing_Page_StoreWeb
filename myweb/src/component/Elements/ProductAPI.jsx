import { memo, useState, useCallback } from "react"
import { useFetchProducts } from "../Hooks/useFetchProducts";
import info from '/src/assets/icons/info.png'
import shop from '/src/assets/icons/cart.png'
import useModalPopUp from "../Hooks/useModalPopUp";

const ProductAPI = () => {
    const { Products } = useFetchProducts();
    const [orderProduct, setOrderProduct] = useState("");
    const { handleShowOrder, handleOrderProduct } = useModalPopUp();

    const handleOrderProduct = useCallback((data) => {
        setOrderProduct(data);
    }, []);
    
    return (
        <>
            {Products.map(data => (
            <div key={data.id} className="w-[45%] h-[20rem] bg-sky-300 rounded-2xl p-0.5 sm:p-1 sm:w-[35%] md:p-2 md:h-[25rem] lg:w-[25%] lg:h-[30rem]">
                {/* pembungkus content */}
                    <div className="w-full h-full bg-transparent rounded-2xl transform-3d relative transition-all duration-1000">
                        {/* Tampak Depan */}
                        <div className="w-full h-full bg-white rounded-2xl absolute backface-hidden flex flex-col p-0.5 gap-2">
                            <img src={ info } alt="" className='w-[9%] h-[5%] absolute self-center cursor-pointer' onClick={(ele) => handleDescriptionProduct(ele.currentTarget)}/>
                            <div className="w-full h-[50%] rounded-2xl shadow-sm shadow-gray-400 p-2 bg-transparent sm:h-[55%] md:h-[60%] lg:p-3">
                                    <img src={ data.image } alt="" className='w-full h-full bg-transparent mt-2'/>
                            </div>
                            <div className="w-full h-[50%] bg-white flex flex-col p-1 rounded-2xl relative">
                                <span className='w-full font-Markazi text-[15px]/3.5 mb-3 font-medium sm:mb-1 md:text-[22px]/5 lg:text-2xl/6'>{ data.title }</span>
                                <span className='font-EB-Garamond font-semibold md:text-[22px] lg:text-2xl'>$ { data.price }</span>
                                <span className='font-Big-Shoulders font-semibold md:text-[22px] lg:text-2xl'>10%</span>
                            </div>
                            <button className='absolute cursor-pointer p-1 w-[27%] h-[15%] bottom-[2%] right-[2%] bg-cyan-300 rounded-lg lg:w-[25%] ' data-id={data.id} onClick={() => { handleOrderProduct(data); handleShowOrder()}}>
                                <img src={shop} alt="" className='w-[95%] h-[95%]'/>
                            </button>
                        </div>
                        {/* Tampak Depan */}

                        {/* tampak belakang */}
                        <div className="w-full h-full backface-hidden rotate-y-180 p-2 rounded-2xl relative overflow-y-auto text-[15px]/5 md:text-[22px]/6 lg:text-2xl">
                                <span className='w-full h-full rounded-2xl font-EB-Garamond '>{ data.description }</span>
                        </div>
                        {/* tampak belakang */}
                    </div>
                {/* pembungkus content */}
            </div>    
            )) }
        </>
    )
}

export default memo(ProductAPI);