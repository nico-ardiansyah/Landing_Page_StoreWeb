import { useCallback, useEffect, useRef, useState } from 'react'
import '../App.css'
import minus from '../assets/icons/minus-sign.png'
import plus from '../assets/icons/plus.png'
import OrderedProduct from './ZS/Order'

export default function Order(props) {
    const addProduct = OrderedProduct(state => state.addProduct);
    const [newPrice, setnewPrice] = useState(props.Product.price);
    const [quantity, setQuantity] = useState(1);

    const Discount = ((10 / 100) * props.Product.price) * quantity;
    const TotalPrice = newPrice - Discount;

    const CounterPlusNewPrice = useCallback(() => {
        setnewPrice(newPrice => newPrice + props.Product.price);
        setQuantity(quantity => quantity + 1);
    },[]);
    const CounterMinusNewPrice = useCallback(() => {
        setnewPrice(newPrice => newPrice - props.Product.price);
        setQuantity(quantity => quantity - 1);
    },[]);

    const GetOrderProduct = useCallback(() => {
        addProduct({
            productPrice: props.Product.price,
            totalPrice: TotalPrice,
            Quantity: quantity,
            productImage: props.Product.image,
            productTitle: props.Product.title,
            productId: props.Product.id
        });
    },[]);

    return (
        <>
                <div className="w-[95%] h-[45%] rounded-2xl bg-sky-500 p-1 sm:w-[85%] sm:h-[60%] md:h-[50%] lg:h-[80%] lg:w-[60%] lg:p-4 z-3">
                    <div className="w-full h-full rounded-2xl flex gap-1 lg:gap-5">
                        <div className="w-[45%] h-full bg-white rounded-2xl flex flex-col gap-2 lg:p-2">
                            <div className="w-full h-[45%] rounded-2xl p-2 shadow-md lg:h-[55%]">
                                <img src={ props.Product.image } alt="" className='w-full h-full'/>
                            </div>
                            <div className="w-full h-[55%] rounded-2xl overflow-y-auto font-Markazi text-[15px]/4 p-2 sm:text-[20px]/5 md:text-2xl/7">
                                <span className='w-full h-full'> { props.Product.description }</span>
                            </div>
                        </div>
                        <div className="w-[55%] h-full rounded-2xl flex flex-col items-center ">
                            <span className='font-bold font-Big-Shoulders text-white text-[20px] md:text-3xl'>MAKE ORDER</span>
                            <div className="w-full bg-white h-full rounded-2xl lg:p-3">
                                <div className="w-full h-[50%] flex relative justify-center">
                                    <div className="w-1/2 flex  flex-col items-center text-[20px] p-1 sm:text-2xl md:text-3xl">
                                        <span className='font-EB-Garamond font-semibold'>Price</span>
                                        <span className='font-Big-Shoulders'>$ { props.Product.price }</span>
                                    </div>
                                    <div className="w-1/2 flex flex-col items-center text-[20px] sm:text-2xl md:text-3xl">
                                        <span className='font-EB-Garamond font-semibold'>Discount</span>
                                        <span className='font-Big-Shoulders'>10%</span>
                                    </div>
                                    <div className="absolute w-full h-[40%] bg-transparent bottom-0 flex flex-col items-center">
                                        <div className="w-full h-[40%] text-[20px] font-semibold font-Big-Shoulders sm:text-2xl md:text-3xl">
                                            <span className='w-full h-full flex justify-center items-center'>$ { Math.floor(newPrice * 100)/100 }</span>
                                        </div>
                                        <div className="w-full h-[60%] flex justify-center lg:w-[80%]">
                                            <div className="h-full bg-gray-50 shadow-sm w-[60%] rounded-full flex items-center justify-center gap-2">
                                                <button className='px-2 bg-gray-200 w-[25%] rounded-full h-[90%] sm:w-[23%] cursor-pointer' onClick={ CounterMinusNewPrice } disabled={quantity <= 1 ? true : false}>
                                                    <img src={ minus } alt="" />
                                                </button>
                                                <span className='font-semibold text-[20px] md:text-3xl'>{ quantity }</span>
                                                <button className='px-2 bg-gray-200 w-[25%] rounded-full h-[90%] sm:w-[23%] cursor-pointer' onClick={ CounterPlusNewPrice }>
                                                    <img src={ plus } alt=""/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-[50%] flex flex-col mt-2">
                                    <div className="w-full h-[40%] flex flex-col">
                                        <div className="w-full h-[50%] flex text-[17px] items-center font-semibold p-2 sm:text-[20px] md:text-2xl">
                                            <span className='w-[50%] font-Markazi'>Discount</span>
                                            <span className='font-Big-Shoulders w-[50%] flex justify-end'>$ { Math.floor(Discount * 100 ) / 100 }</span>
                                        </div>
                                        <div className="w-full h-[50%] flex items-center font-semibold p-2 text-[17px] sm:text-[20px] md:text-2xl">
                                            <span className='w-[50%] font-Markazi'>Total Price</span>
                                            <span className='font-Big-Shoulders flex justify-end w-[50%]'>$ { Math.floor(TotalPrice * 100)/100 }</span>
                                        </div>
                                    </div>
                                    <div className="w-full h-[55%] flex justify-center items-center">
                                        <button className='w-[50%] rounded-full h-[40%] bg-cyan-300 font-bold font-Big-Shoulders shadow-md shadow-slate-400 text-slate-500 sm:text-2xl md:text-3xl cursor-pointer'  onClick={GetOrderProduct}>
                                            ORDER
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
