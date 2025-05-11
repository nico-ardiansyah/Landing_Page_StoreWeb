import '../App.css'
import Bin from '../assets/icons/bin.png'
import Trash from '../assets/icons/trash.png'
import CheckOut from '../assets/icons/checklist.png'
import Minus from '../assets/icons/minus-sign.png'
import Plus from '../assets/icons/plus.png'
import OrderedProduct from './ZS/Order'
import handleDeleteAndCheckOutModal from './Hooks/handleDelete&CheckOutModal'

export default function OrderList() {
    const { product, removeProduct, addProduct, decrementProduct } = OrderedProduct();
    const { handleDeleteModal, handleCheckOutModal } = handleDeleteAndCheckOutModal();
    

    return (
        <>
                    <div className="w-[90%] h-[60%] bg-sky-500 rounded-2xl p-1 overflow-y-auto sm:w-[70%] sm:p-2 lg:w-[50%] lg:h-[85%] z-4">
                    {product.map((data) => (
                        <div className="w-full h-[9rem] rounded-2xl relative mb-3 lg:h-[12rem]" key={data.productId}>
                            <div className="w-full h-full absolute rounded-2xl bg-red-500 flex justify-end items-center cursor-pointer" onClick={() => removeProduct(data.productId)} >
                                <img src={Trash} alt="" className='w-[10%] sm:w-[8%]'/>
                            </div>
                            <div className="w-full h-full absolute rounded-2xl bg-green-500 flex justify-center items-end text-[12px] flex-col font-Big-Shoulders font-semibold text-white pr-1 sm:text-[15px] transition-all duration-1000 md:text-[18px] lg:text-2xl">
                                <span>Check</span>
                                <span className='mr-[2%]'>Out</span>
                            </div>
                            <div className="w-full h-full bg-white rounded-2xl absolute flex p-1 gap-1 transition-all duration-1000">
                                <div className="w-[35%] h-full rounded-2xl bg-transparent p-1 md:w-[30%]">
                                    <img src={data.productImage} alt="" className='w-full h-full' />
                                </div>
                                <div className="w-[65%] h-full bg-transparent rounded-2xl flex md:w-[70%]">
                                    <div className="w-[90%] h-full rounded-2xl bg-transparent font-Markazi text-[17px]/3 font-semibold flex flex-col relative gap-2 sm:text-[17px]/4 lg:text-[21px]">
                                        <span>{data.productTitle}</span>
                                        <span className='font-Big-Shoulders'>$ {data.productPrice}</span>
                                        <span className='font-Big-Shoulders'>10%</span>
                                        <div className="absolute w-full h-[18%] bg-trasnparent bottom-3 flex items-center sm:h-[23%] md:h-[25%]">
                                            <div className="w-[35%] h-full rounded-full bg-gray-300 flex justify-center items-center text-[15px] gap-1 sm:text-[18px] lg:text-3xl md:text-2xl">
                                                <button className='w-[30%] rounded-full bg-gray-100 p-1 md:p-2 cursor-pointer' onClick={() => decrementProduct(data)} disabled={data.Quantity <= 1 ? true:false}>
                                                    <img src={Minus} alt="" />
                                                </button>
                                                <span>{ data.Quantity }</span>
                                                <button className='w-[30%] rounded-full bg-gray-100 p-1 md:p-2 cursor-pointer' onClick={() => addProduct(data)}>
                                                    <img src={Plus} alt="" />
                                                </button>
                                            </div>
                                            <div className="absolute w-[50%] bg-transparent h-full right-0 text-[14px] font-Big-Shoulders flex items-center justify-end mr-2 sm:text-[17px] lg:text-[20px]">
                                                <span>$ {Math.floor(data.totalPrice * 100)/100}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[10%] h-full flex flex-col bg-transparent relative">
                                        <img src={Bin} alt="" className='absolute top-5 md:w-[90%] cursor-pointer' onClick={(ele) => handleDeleteModal(ele.currentTarget)}/>
                                        <img src={CheckOut} alt="" className='absolute bottom-5 md:w-[90%] cursor-pointer' onClick={(ele) => handleCheckOutModal(ele.currentTarget)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </>
    )
}