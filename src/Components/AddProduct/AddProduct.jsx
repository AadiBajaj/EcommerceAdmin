// import { useState } from "react";
// import "./AddProduct.css";
// import upload_area from "../Assets/upload_area.svg";

// const AddProduct = () => {
//   const port=4000;
//   const[image,setImage] = useState(false);
//   const [productDetails,setProductDetails] = useState({
//       name:"",
//       image:"",
//       category:"SkinCare",
//       new_price:"",
//       old_price:""
//   });
  
//   const AddProduct = async () => {
    
//     let dataObj;
//     let product = productDetails;

//     let formData = new FormData();
//     formData.append('product', image);
    
//     await fetch(`http://localhost:${port}/upload`, {
//       method: 'POST',
//       headers: {
//         Accept:'application/json',
//       },
//       body: formData,
//     })
//       .then((resp) => resp.json()).then((data) => {dataObj=data});

//     if (dataObj.success) {
//       product.image = dataObj.image_url;
//       console.log(product);
//       await fetch(`http://localhost:${port}/addproduct`, {
//       method: 'POST',
//       headers: {
//         Accept:'application/json',
//         'Content-Type':'application/json',
//       },
//       body: JSON.stringify(product),
//     })
//       .then((resp) => resp.json())
//       .then((data) => {data.success?alert("Product Added"):alert("Failed")});
      
//     }
//   }

//   const changeHandler = (e) => {
//     console.log(e);
//     setProductDetails({...productDetails,[e.target.name]:e.target.value});
//     }

//   const imageHandler = (e) => {
//     setImage(e.target.files[0]);
//     }

//   return (
//     <div className="addproduct">
//       <div className="addproduct-itemfield">
//         <p>Product title</p>
//         <input type="text" name="name" value={productDetails.name} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
//       </div>
//       <div className="addproduct-price">
//         <div className="addproduct-itemfield">
//           <p>Price</p>
//           <input type="text" name="old_price" value={productDetails.old_price} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
//         </div>
//         <div className="addproduct-itemfield">
//           <p>Offer Price</p>
//           <input type="text" name="new_price" value={productDetails.new_price} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
//         </div>
//       </div>
//       <div className="addproduct-itemfield">
//         <p>Product category</p>
//         <select value={productDetails.category} name="category" className="add-product-selector" onChange={changeHandler}>
//           <option value="SkinCare">Skincare</option>
//           <option value="HairCare">Haircare</option>
//           <option value="Makeup">Makeup</option>
//         </select> 
//       </div>
//       <div className="addproduct-itemfield">
//         <p>Product title</p>
//         <label htmlFor="file-input">
//           <img className="addproduct-thumbnail-img" src={!image?upload_area:URL.createObjectURL(image)} alt="" />
//         </label>
//         <input onChange={(e)=>{imageHandler(e)}} type="file" name="image" id="file-input" hidden />
//       </div>
//       <button className="addproduct-btn" onClick={()=>{AddProduct()}}>ADD</button>
//     </div>
//   );
// };

// export default AddProduct;

import { useState } from "react";
import "./AddProduct.css";
import upload_area from "../Assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    image: "",
    category: "SkinCare",
    detailed_category: "",
    new_price: "",
    old_price: ""
  });

  const AddProduct = async () => {
    let dataObj;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    await fetch(`https://ecommercebackend-s6d7.onrender.com/upload`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    })
      .then((resp) => resp.json()).then((data) => { dataObj = data });

    if (dataObj.success) {
      product.image = dataObj.image_url;
      console.log(product);
      await fetch(`https://ecommercebackend-s6d7.onrender.com/addproduct`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => { data.success ? alert("Product Added") : alert("Failed") });
    }
  }

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  }

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  }

  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input type="text" name="name" value={productDetails.name} onChange={(e) => { changeHandler(e) }} placeholder="Type here" />
      </div>
      <div className="addproduct-itemfield">
        <p>Description</p>
        <textarea name="description" value={productDetails.description} onChange={(e) => { changeHandler(e) }} placeholder="Type here"></textarea>
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input type="text" name="old_price" value={productDetails.old_price} onChange={(e) => { changeHandler(e) }} placeholder="Type here" />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input type="text" name="new_price" value={productDetails.new_price} onChange={(e) => { changeHandler(e) }} placeholder="Type here" />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select value={productDetails.category} name="category" className="add-product-selector" onChange={changeHandler}>
          <option value="SkinCare">Skincare</option>
          <option value="HairCare">Haircare</option>
          <option value="Makeup">Makeup</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <p>Detailed Category</p>
        <input type="text" name="detailed_category" value={productDetails.detailed_category} onChange={(e) => { changeHandler(e) }} placeholder="Type here" />
      </div>
      <div className="addproduct-itemfield">
        <p>Product Image</p>
        <label htmlFor="file-input">
          <img className="addproduct-thumbnail-img" src={!image ? upload_area : URL.createObjectURL(image)} alt="" />
        </label>
        <input onChange={(e) => { imageHandler(e) }} type="file" name="image" id="file-input" hidden />
      </div>
      <button className="addproduct-btn" onClick={() => { AddProduct() }}>ADD</button>
    </div>
  );
};

export default AddProduct;
