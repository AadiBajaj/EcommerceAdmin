// import { useEffect, useState } from "react";
// import "./ListProduct.css";
// import cross_icon from '../Assets/cross_icon.png'

// const ListProduct = () => {
//   const [allproducts, setAllProducts] = useState([]);

//   const fetchInfo = async() => { 
//     await fetch('http://localhost:4000/allproducts') 
//             .then((res) => res.json()) 
//             .then((data) => setAllProducts(data))
//     }

//     useEffect(() => {
//       fetchInfo();
//     }, [])

//     const removeProduct = async (id) => {
//       await fetch('http://localhost:4000/removeproduct', {
//       method: 'POST',
//       headers: {
//         Accept:'application/json',
//         'Content-Type':'application/json',
//       },
//       body: JSON.stringify({id:id}),
//     })

//     fetch('http://localhost:4000/allproducts') 
//     .then((res) => res.json()) 
//     .then((data) => setAllProducts(data))

//     }

//   return (
//     <div className="listproduct">
//       <h1>All Products List</h1>
//       <div className="listproduct-format-main">
//           <p>Products</p>
//           <p>Title</p>
//           <p>Old Price</p>
//           <p>New Price</p>
//           <p>Category</p>
//           <p>Remove</p>
//       </div>
//       <div className="listproduct-allproducts">
//         <hr />
//         {allproducts.map((product,index) => {
//           return (
//             <>
//             <div key={index} className="listproduct-format-main listproduct-format">
//                 <img className="listproduct-product-icon" src={product.image} alt="" />
//                 <p>{product.name}</p>
//                 <p>Rs. {product.old_price}</p>
//                 <p>Rs. {product.new_price}</p>
//                 <p>{product.category}</p>
//                 <img className="listproduct-remove-icon" onClick={()=>{removeProduct(product.id)}} src={cross_icon} alt="" />
//               </div>
//               <hr />
//               </>);
//         })}
//       </div>
//     </div>
//   );
// };

// export default ListProduct;

import { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from '../Assets/cross_icon.png';

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => { 
    await fetch('https://ecommercebackend-s6d7.onrender.com/allproducts') 
      .then((res) => res.json()) 
      .then((data) => setAllProducts(data));
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    await fetch('https://ecommercebackend-s6d7.onrender.com/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    fetchInfo();
  }

  return (
    <div className="listproduct">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((product, index) => (
          <div key={index}>
            <div className="listproduct-format-main listproduct-format">
              <img className="listproduct-product-icon" src={product.image} alt="" />
              <p>{product.name}</p>
              <p>Rs. {product.old_price}</p>
              <p>Rs. {product.new_price}</p>
              <p>{product.detailed_category}</p>
              <img className="listproduct-remove-icon" onClick={() => removeProduct(product.id)} src={cross_icon} alt="Remove" />
            </div>
            <p className="listproduct-description">{product.description}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
