import { Fragment } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import ProductCard from "../components/ProductCard"

export default function Home() {
    const [products, setProducts]=useState([])
    const[searchParams,setSearchParams]=useSearchParams()
    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
        .then(res => res.json())
        .then(data => setProducts(data.products))
    },[searchParams])
    
    return <Fragment>
        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
            <div className="row">
               {products.map(product=> <ProductCard product={product} />)}
                
                
            </div>
        </section>


    </Fragment>
}