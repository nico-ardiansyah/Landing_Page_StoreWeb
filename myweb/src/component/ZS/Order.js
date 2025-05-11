import { create } from 'zustand'

const OrderedProduct = create((set, get) => ({
    product: [],
    addProduct: (items) => {
        const product = get().product;
        const existing = product.find(value => value.productId === items.productId);
        if (existing) {
            set({
                product: product.map(item => item.productId === items.productId ? { ...item, Quantity: item.Quantity + 1, totalPrice: item.totalPrice + (items.productPrice - (items.productPrice * (10 / 100))) } : item)
            });
        } else
            set((state) => ({
                product: [...state.product, items]
            }));
    },
    decrementProduct: (items) => {
        const product = get().product;
        set({
            product: product.map(item => item.productId === items.productId ? { ...item, Quantity: item.Quantity - 1, totalPrice: item.totalPrice - (items.productPrice - (items.productPrice * (10 / 100))) } : item)
        });
        
    },
    removeProduct: (productId) => set((state) => ({
        product: state.product.filter(item => item.productId !== productId)
    })),
    
}));

export default OrderedProduct
