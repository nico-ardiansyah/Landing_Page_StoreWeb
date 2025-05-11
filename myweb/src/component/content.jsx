import '../App.css'

import React, { useCallback, useMemo, useState, Suspense, lazy, useEffect } from 'react'
import { useFetchProducts } from './Hooks/useFetchProducts'
import AnimationLoading from './AnimationLoading'
import Home from '../assets/icons/home.png'
import info from '../assets/icons/info.png'
import shop from '../assets/icons/cart.png'
import MaleCloth from '../assets/icons/man.png'
import FemaleCloth from '../assets/icons/coat.png'
import Accessories from '../assets/icons/necklace.png'
import Electronics from '../assets/icons/responsive.png'
import Cart from '../assets/icons/cart.png'
import OrderedProduct from './ZS/Order'
import useModalPopUp from './Hooks/useModalPopUp'

export default function Content() {
    const Order = lazy(() => import('./Order'));
    const OrderList = lazy(() => import('./OrderList'));
    const { showModal, showOrder, showOrderList, handleCloseModal, handleOrderList, handleShowOrder } = useModalPopUp();
    const { fetchLoading, getCategory, Products } = useFetchProducts();
    const [orderProduct, setOrderProduct] = useState("");
    const totalProductOrder = OrderedProduct(state => state.product);
    let Quantity = totalProductOrder.length;


    const handleDescriptionProduct = useCallback((ele) => {
        const element = ele.parentElement.parentElement;
        element.style.transform = `rotateY(180deg)`;

        document.addEventListener("click", function (e) {
            if (!ele.contains(e.target)) {
                element.style.transform = `rotateY(360deg)`;
            };
        });
        return (
            document.removeEventListener("click", handleDescriptionProduct)
        );
    }, []);
    
    const handleOrderProduct = useCallback((data) => {
        setOrderProduct(data);
    }, []);

    
    // Modal
    const Modal = () => {
        return (
            <Suspense >
                <div className="left-0 right-0 bottom-0 top-0 justify-center items-center bg-white/50 flex fixed z-1" >
                    <div className="w-full h-full absolute" onClick={handleCloseModal}></div>
                    {showOrder && <Order Product={orderProduct} />}
                    {showOrderList && <OrderList />}
                </div>
            </Suspense>
        )
    };

    const NavbarList = (props) => {
        return (
            <>
                <div className="w-[16%] h-full cursor-pointer shadow-md bg-gray-300 p-2 rounded-full lg:w-[13%] group hover:translate-y-[-15%] transition duration-1000 relative font-Big-Shoulders font-semibold text-[20px]" onClick={() => getCategory(props.Category)}>
                    <span className={`p-1 absolute top-[-2rem] group-hover:translate-y-[-5%] transition duration-1000 invisible group-hover:visible ${props.CSS} `}>{props.title}</span>
                    <img src={props.image} alt="" className='w-full h-full' />
                </div>
            </>
        )
    };
    //All, men's clothing, women's clothing, jewelery, electronics


    //Navbar
    const Navbar = () => {
        return (
            <>
                <div className="w-[70%] h-[3rem] rounded-full bg-white bottom-[-1.5rem] flex justify-center items-center absolute gap-1 p-1 top-[-3rem] sm:w-[60%] sm:h-[4rem] md:w-[50%] lg:w-[40%] lg:h-[4.5rem] lg:gap-2 shadow-lg">
                    
                    <NavbarList image={Home} title={"Home"} CSS={"left-[-15%] sm:left-0 sm:ml-[7%] lg:ml-[15%] w-full"} Category={"All"} />
                    <NavbarList image={MaleCloth} title={"Men Cloth"} CSS={"w-[100px] left-[-50%] sm:left-[-25%] lg:left-[-13%]"} Category={"men's clothing"} />
                    <NavbarList image={FemaleCloth} title={"Women Cloth"} CSS={"w-[8rem] sm:left-[-45%] lg:left-[-30%] left-[-80%]"} Category={"women's clothing"} />
                    <NavbarList image={Accessories} title={"Accessories"} CSS={"w-[8rem] left-[-70%] sm:left-[-40%] lg:left-[-20%]"} Category={"jewelery"} />
                    <NavbarList image={Electronics} title={"Electronic's"} CSS={"w-[8rem] left-[-70%] sm:left-[-35%] lg:left-[-20%]"} Category={"electronics"} />
                    <div className="w-[16%] h-full cursor-pointer shadow-md bg-gray-300 p-2 rounded-full lg:w-[13%] group hover:translate-y-[-15%] relative transition duration-1000" onClick={handleOrderList}>
                        <span className='p-1 w-[8rem] font-Big-Shoulders text-[20px] font-semibold absolute top-[-2rem] group-hover:translate-y-[-5%] transition left-[-50%] duration-1000 invisible group-hover:visible sm:left-[-20%] lg:left-[-8%]'>List Order</span>
                        <img src={Cart} alt="" className='w-full h-full' />
                        <div className="rounded-full absolute top-0 right-0 bg-red-700 w-[25%] h-[25%] text-white text-[10px] font-bold font-Markazi justify-center items-center sm:text-[12px] lg:text-[15px]" style={Quantity ? { display: "flex" } : { display: "none" }}>
                            <span className='mt-0.5 sm:mt-0'>{Quantity}</span>
                        </div>
                    </div>
                </div>
            </>
        )
    };


    return (
        <>
            {showModal && <Modal />}
            {fetchLoading && <AnimationLoading/>}
            <div className="w-full mt-3 p-2 relative flex justify-center">
                <div className="w-full h-full bg-gray-200 rounded-2xl p-3">
                    <div className="w-full h-full my-3 flex flex-wrap justify-center gap-2 bg-transparent lg:my-5">
                        {Products.map(data => (
                                    <div key={data.id} className="w-[45%] h-[15rem] bg-sky-300 rounded-2xl p-0.5 sm:p-1 sm:w-[35%] md:p-2 md:h-[20rem] lg:w-[25%] lg:h-[25rem]">
                                        {/* pembungkus content */}
                                            <div className="w-full h-full bg-transparent rounded-2xl transform-3d relative transition-all duration-1000">
                                                {/* Tampak Depan */}
                                                <div className="w-full h-full bg-white rounded-2xl absolute backface-hidden flex flex-col p-0.5 gap-2">
                                                    <img src={ info } alt="" className='w-[9%] h-[5%] absolute self-center cursor-pointer' onClick={(ele) => handleDescriptionProduct(ele.currentTarget)}/>
                                                    <div className="w-full h-[50%] rounded-2xl shadow-sm shadow-gray-400 p-2 bg-transparent sm:h-[55%] md:h-[60%] lg:p-3 flex justify-center items-center">
                                                            <img src={ data.image } alt="" className='w-[70%] h-[75%] mt-2'/>
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
                    </div>
                </div>
            <Navbar />
            </div>
        </>
    )
}