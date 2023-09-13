import { useState,useEffect } from "react";
import { add } from "../Redux/Cartslice";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES, fetchproduct } from "../Redux/ProductSlice";

const Home = () => {
  // const [products,setProducts] = useState([]);
  const dispatch = useDispatch();
const {data:products ,status} = useSelector((state)=>state.product)
  useEffect(()=>{
    // const fetchProduct = async()=>{
    //   const res = await fetch("https://fakestoreapi.com/products")
    //   const data = await res.json();
    //   setProducts(data);
    // }
    // fetchProduct();
  dispatch(fetchproduct());
  },[])

const handlead=(product)=>{
dispatch(add(product));
}

if(status === STATUSES.Loading){
  return <h2 style={{fontWeight:"bolder"}}>Loading...</h2>
}
  return (
    <div className="productsWrapper">
      {
        products.map((product)=>(
       <div className="card" key={product.id}>
         <img src={product.image} alt="img"/>
         <h4>{product.title}</h4>
         <h5>{product.price}</h5>
         <button className="btn" onClick={()=>handlead(product)}>Add to Cart</button>
       </div>
        ))
      }
    </div>
  )
}

export default Home