
const handleDeleteAndCheckOutModal = () => {

    const toggleClass = (ele, fromClss, toClss) => {
        ele.classList.remove(fromClss);
        ele.classList.add(toClss);
    };

    const getWIdhtElements = (productEle, checkOutEle) => {
        const productEleWidth = Array.from(productEle.classList).find(cls => cls.startsWith('w-'));
        const checkOutEleWidth = Array.from(checkOutEle.classList).find(cls => cls.startsWith('w-'));
        return { productEleWidth, checkOutEleWidth };
    }

    const getGrandParentElement = (element) => {
        if (element === null,undefined) return;
        const grandParentElement = element.parentElement?.parentElement?.parentElement?.parentElement;
        const checkOutElement = grandParentElement.children[1];
        const productElement = grandParentElement.children[2];
        return { productElement, checkOutElement };
    };

    const handleDeleteModal = (ele) => {
        const { productElement, checkOutElement } = getGrandParentElement(ele);
        const { productEleWidth, checkOutEleWidth } = getWIdhtElements(productElement, checkOutElement);

        if (checkOutEleWidth === "w-full" && productEleWidth === "w-full") {
            toggleClass(checkOutElement, "w-full", "w-[90%]");
            toggleClass(productElement, "w-full", "w-[90%]");
        } else if (checkOutEleWidth === "w-[90%]" && productEleWidth === "w-[90%]") {
            toggleClass(checkOutElement, "w-[90%]", "w-full");
            toggleClass(productElement, "w-[90%]", "w-full");
        } else if (checkOutEleWidth === "w-full" && productEleWidth === "w-[90%]") {
            toggleClass(checkOutElement, "w-full", "w-[90%]");
        }
        

        return (
            document.removeEventListener("click", handleDeleteModal)
        );

    };
    const handleCheckOutModal = (ele) => {
        const { productElement, checkOutElement } = getGrandParentElement(ele);
        const { productEleWidth, checkOutEleWidth } = getWIdhtElements(productElement, checkOutElement);

        if (checkOutEleWidth === "w-full" && productEleWidth === "w-full") {
            toggleClass(productElement, "w-full", "w-[90%]");
        } else if (checkOutEleWidth === "w-full" && productEleWidth === "w-[90%]") {
            toggleClass(productElement, "w-[90%]", "w-full");
        } else if (checkOutEleWidth === "w-[90%]" && productEleWidth === "w-[90%]") {
            toggleClass(checkOutElement, "w-[90%]", "w-full");
        }

        return (
            document.removeEventListener("click", handleCheckOutModal)
        );
    };

    return {
        handleDeleteModal,
        handleCheckOutModal
    };
};

export default handleDeleteAndCheckOutModal;