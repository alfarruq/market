
import ProductCard from '../../components/ProductCard';
import './style.css'


function Products() {

 

    return ( 
        <main className="container product-main" >
           <section className='product-cards' >
                <ProductCard/>
           </section>
        </main>
     );
}

export default Products;