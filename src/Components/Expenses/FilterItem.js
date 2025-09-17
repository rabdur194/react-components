import React,{useEffect, useState} from 'react'
import classes from './FilterItem.module.css'

//  const products=[
//   {id:1, Iphjone:14, model: 14},
//   {id:2, Iphone:15, model: 15}
//  ]
const apiKey= 'https://fakestoreapi.com/products';

function FilterItem() {
  const [products, setProducts] = useState([])
  const [searchItem, setSearchItem]= useState('')

useEffect(()=>{ 
  const fetchProducts = async()=> {
  try{
  const res= await fetch(apiKey)
  const data= await res.json()
  setProducts(data)
  }
  catch (err) {
    console.log('error while fetching data', (err))
  }
}
fetchProducts();
},[])

const filteredProducts =
  products.filter((product)=>(
    product.title.toLowerCase().includes(searchItem.toLowerCase())
  ))

 const changeHandler= (e)=>{
  setSearchItem(e.target.value)
  console.log(e)
 }
  return (
    <div className={classes.productPage}>Filter
    <input className={classes.searchBox} type='text' name='text'  
    placeholder='Search Here' 
    onChange={changeHandler}
      />

      {/* products */}
      <div className={classes.productsDisplay}>
        {filteredProducts.length>0 ?
        filteredProducts.map((item)=> (
          <div key={item.id}
          >
            <img src={item.image}
            alt={item.title} />
            <h2>{item.title}</h2>
            <h3 className={classes.prodDescription}>{item.description}</h3>
          </div>
        ))
        :
        <p>Products not found</p>
        }

      </div>

  </div>
    )
}

export default FilterItem