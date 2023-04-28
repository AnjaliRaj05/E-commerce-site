import React,{useState,useEffect}from 'react';
import { NavLink } from 'react-router-dom';
import './Products.css'
import Skeleton from 'react-loading-skeleton';
// import Navbar from '../NavSection/Navbar';


export default function Products() {


const [data,setData]=useState([]);
const [filter,setFilter]=useState(data);
const[loadings,setLoadings]=useState(false);
let componentMounted = true;
useEffect(()=>{
const getProducts =  async()=>{
  setLoadings(true);
 
  const response = await fetch("https://fakestoreapi.com/products")
if(componentMounted){
  setData(await response.clone().json());
  setFilter(await response.json());
  setLoadings(false);
  console.log(filter);
}
return ()=>{
  componentMounted = false;
}
}
getProducts();


},[]);

const Loading=()=>{
  return <> Loading.....
  {/* <Skeleton height={350}></Skeleton> */}
  <div className="col-md-3"> 
  <Skeleton height={350}></Skeleton></div>
  <div className="col-md-3"> 
  <Skeleton height={350}></Skeleton></div>
  
  </>;
  
};

const filterProduct=(cat)=>{
  const updatedList = data.filter((x)=>x.category=== cat);
  setFilter(updatedList);
}
const ShowProducts=()=>{

  return (
    <>

    <div className="btn-part">
      
    <button className="btn2" onClick={()=>setFilter(data)}>All</button>
    <button className="btn2" onClick={()=>filterProduct("men's clothing")}>Men</button>
    <button className="btn2"onClick={()=>filterProduct("women's clothing")}>Women</button>
    <button className="btn2" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
    <button className="btn2" onClick={()=>filterProduct("electronics")}>electronic</button>
    
  </div>


  {filter.map((product)=>{
    return (
    <>
   
    <div className="col-md-3">
      <div className="card h-100 text-center p-4" key={product.id}>
        <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
        <div className="card-body">
          <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
          <p>${product.price}</p>
          {/* //<button className="p-btn">Buy Now</button> */}
          {/* <button>< NavLink to="/products/${product.id}">Buy Now</NavLink></button> */}
          <NavLink to={`/products/${product.id}`} className="btn btn-dark ms-2 px-3 py-2">Buy Now</NavLink>
        </div>
      </div>
    </div>
    

    
    </>

    )
  })}
    </>
  );
  
};
  return (
    <>
        {/* <Navbar/> */}
    <div>

    <div className="container">
     <h1 className="head-part">Latest Products</h1> 
     <hr/>
    </div>
    <div className="row">
      {loadings ?  <Loading/>:<ShowProducts/>}
      </div>
    </div>
    </>
    
  )
}

 


