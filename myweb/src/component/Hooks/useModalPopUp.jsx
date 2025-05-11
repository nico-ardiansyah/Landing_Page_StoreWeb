import { useCallback, useState } from "react";

const useModalPopUp = () => {
    const [showOrder, setShowOrder] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showOrderList, setShowOrderList] = useState(false);

    const handleCloseModal = useCallback(() => {
            setShowModal(false);
            setShowOrder(false);
            setShowOrderList(false)
            document.body.style.overflowY = 'auto';
    },[]);
    
    
    const handleShowOrder = useCallback(() => {
        setShowOrder(true);
        setShowModal(true);
        document.body.style.overflowY = "hidden";
        
    },[]);
    
    const handleOrderList = useCallback(() => {
        setShowOrderList(true);
        setShowModal(true);
        document.body.style.overflowY = "hidden";
    }, []);
    

    return {
        showModal,
        showOrder,
        showOrderList,
        handleShowOrder,
        handleCloseModal,
        handleOrderList,
        
    }
}

export default useModalPopUp;