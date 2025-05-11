import { useCallback, useEffect, useState } from "react"

export const useFetchProducts = () => {
    const [Products, setProducts] = useState([]);
    const [fetchLoading, setFetchLoading] = useState(false);
    const [fetchError, setFetchError] = useState("");
    const [category, setCategory] = useState("");

    const getCategory = useCallback((Category) => {
        setCategory(Category);
    }, [category]);

    useEffect(() => {
        const fetchProduct = async () => {
            setFetchLoading(true);
                try {
                    setFetchLoading(true);
                    const response = await fetch("https://fakestoreapi.com/products/");
                    const responseJson = await response.json();
                    setProducts(responseJson);
                } catch (err) {
                    setFetchError(err);
                } finally {
                    setFetchLoading(false);
                }
                return;
        }


        const fetchCategoryProduct = async (category) => {
            if (category === 'All') {
                setFetchLoading(true);
                fetchProduct();
                return;
            } 

            try {
                setFetchLoading(true);
                const response = await fetch("https://fakestoreapi.com/products/category/" + category);
                const responseJson = await response.json();
                setProducts(responseJson);
            } catch (err) {
                setFetchError(err);
            } finally {
                setFetchLoading(false);
            }
            return;
        };

        fetchProduct();
        fetchCategoryProduct(category);

    }, [category]);



    return {
        fetchError,
        fetchLoading,
        Products,
        getCategory
    };
};

