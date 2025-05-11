import { memo } from "react"

const  AnimationLoading = () => {
    return (
        <div className="w-full top-0 bottom-0 fixed bg-gray-300/50 z-2 flex justify-center items-center">
            <div className="text-2xl text-shadow-md text-black text-shadow-white font-Big-Shoulders font-bold bg-transparent sm:text-4xl md:text-6xl lg:text-8xl">Loading ....</div>
        </div>
    )
}

export default memo(AnimationLoading);