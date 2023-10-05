import React from 'react'
import ProductCard from '../components/ProductCard'
import { useSelector } from 'react-redux'
import Modal from '../components/Modal'



const Product = () => {
  const {modal} =useSelector(state =>state.modal)


  const buttonFunc = () =>{

  };
    <div>
      <ProductCard/>
      {modal && <Modal title={"ürün oluştur"} btnText={"oluştur"} btnFunc={buttonFunc}/>}
    </div>

};

export default Product
