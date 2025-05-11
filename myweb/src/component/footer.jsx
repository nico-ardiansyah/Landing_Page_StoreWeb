import '../App.css'
import facebook from '../assets/icons/facebook.png'
import instagram from '../assets/icons/instagram.png'
import threads from '../assets/icons/threads.png'
import twitter from '../assets/icons/twitter.png'
import youtube from '../assets/icons/youtube.png'
import { memo } from 'react'

const Fotter = () => {
    return (
        <>
            <div className="w-full h-[15rem] p-2 md:h-[20rem] lg:h-[30rem]">
                <div className="w-full h-full rounded-2xl bg-gray-800 p1 flex gap-1 p-1">
                    <div className="w-[35%] h-full flex flex-col border-1 items-center border-white/50 rounded-2xl p-1">
                        <span className='font-Big-Shoulders text-white sm:text-[20px] md:text-2xl lg:text-4xl'>Location</span>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.2775213548557!2d105.50823939791584!3d-5.160439738230102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4093784ddf286d%3A0x1e55085d707bfbd5!2sJl.%20Tj.%20Harapan%20No.16%2C%20Sumber%20Gede%2C%20Kec.%20Marga%20Tiga%2C%20Kabupaten%20Lampung%20Timur%2C%20Lampung%2034386!5e0!3m2!1sid!2sid!4v1746488919889!5m2!1sid!2sid" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-full rounded-2xl'></iframe>
                    </div>
                    <div className="w-[65%] h-full rounded-2xl p-1 border-1 border-white/50 flex flex-col">
                        <span className='font-Big-Shoulders text-white flex gap-2 justify-center sm:text-[20px] md:text-2xl lg:text-4xl items-center'>Let's Connect With Us
                            
                        </span>
                        <div className="w-full h-full bg-transparent flex flex-col justify-center gap-2">
                            <div className="w-full flex gap-1">
                                <img src={ facebook } alt="" className='w-[10%] h-full sm:w-[7%]'/>
                                <span className='font-Markazi text-[15px] text-white md:text-[20px] lg:text-3xl'>Lorem ipsum dolor sit amet.</span>
                            </div>
                            <div className="w-full flex gap-1">
                                <img src={ instagram } alt="" className='w-[10%] h-full sm:w-[7%]'/>
                                <span className='font-Markazi text-[15px] text-white md:text-[20px] lg:text-3xl'>Lorem ipsum dolor sit amet.</span>
                            </div>
                            <div className="w-full flex gap-1">
                                <img src={ threads } alt="" className='w-[10%] h-full sm:w-[7%]'/>
                                <span className='font-Markazi text-[15px] text-white md:text-[20px] lg:text-3xl'>Lorem ipsum dolor sit amet.</span>
                            </div>
                            <div className="w-full flex gap-1">
                                <img src={ twitter } alt="" className='w-[10%] h-full sm:w-[7%]'/>
                                <span className='font-Markazi text-[15px] text-white md:text-[20px] lg:text-3xl'>Lorem ipsum dolor sit amet.</span>
                            </div>
                            <div className="w-full flex gap-1">
                                <img src={ youtube } alt="" className='w-[10%] h-full sm:w-[7%]'/>
                                <span className='font-Markazi text-[15px] text-white md:text-[20px] lg:text-3xl'>Lorem ipsum dolor sit amet.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Fotter);