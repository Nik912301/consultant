import './Product.css'
import { products } from '../../data'

export default function Product(){
    return (
        <div className="product-container">
            {products.map(product =>(
                <div className={'product'} key={product.title} {...product}>
                    <h3>{product.title}</h3>
                    <p>{product.text}</p>
                </div>))}
        </div>
    )
}