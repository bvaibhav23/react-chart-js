export const fetchCart = async () => {
    const response = await fetch('https://dummyjson.com/carts')
    if (!response.ok) {
        throw new Error('Carts could not be fetched!')
    } else {
        return response.json()
    }
}

export const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products?limit=30')
    if (!response.ok) {
        throw new Error('Products could not be fetched!')
    } else {
        return response.json()
    }
}