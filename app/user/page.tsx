import LikeButton from '@/user/LikeButton'
export default async function Page() {
    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json()
    const firstProduct = products[0] // Get only the first product
    
    return(
        <div>
            <h1>First Product</h1>
            <div>
                <h2>{firstProduct.title}</h2>
                <p>{firstProduct.description}</p> 
                <LikeButton />               
            </div>
        </div>
    )
}
