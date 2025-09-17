import React, {useState,useEffect,useMemo} from 'react' 
import { BiCarousel } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';
import './EcommercePage.css'

const API_URL= 'https://fakestoreapi.com/products';

function EcommercePage() {
    const [products,setProducts]= useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [maxPrice, setMaxPrice] = useState(2000);
    const [cart, setCart] = useState([]);
    const [currentSlide, setCurrentSlide]=useState(0);

    const carousel_images=[
        'https://picsum.photos/1200/400?7',
        'https://picsum.photos/1200/400?8',
        'https://picsum.photos/1200/400?9'
    ]

    useEffect(()=>{
        const fetchProducts = async ()=>{
            try{
                const res= await fetch (API_URL);
                const data= await res.json();
                console.log(data);
                setProducts(data);
            }
            catch(err)
            {
                console.log('Error fetching data',err);
            }
        }
        fetchProducts();
    },[])

    //extract unique category
    const categories = useMemo (()=>{
        const all= ['All', ...new Set(products.map((p)=> p.category))];
        return all;
    },[products]);

    //filter products
    const filteredProducts= useMemo(()=>{
        return products.filter((p)=>{
            const matchesSearch=p.title.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = category=== 'All'|| p.category === category;
            const matchesPrice = p.price<=maxPrice;
            return matchesSearch && matchesCategory && matchesPrice
        })
    },[products,search,category,maxPrice])

    const handleAddToCart = (product)=>{
        setCart((prev)=> [...prev,product])
    }

    const nextSlide=()=>{
        setCurrentSlide((prev)=> (prev+1)%carousel_images.length)
    }
    const prevSlide = ()=>{
        setCurrentSlide((prev)=> prev === 0? carousel_images.length-1:prev-1)
    }

  return (
    <div className='p-6 font-sans'>
        <header className='flex justify-between items-center mb-6'>
            <h1 className='text-3xl font-bold'>🛒 MyStore</h1>
            <div className="flex items-center gap-3">
            <FaShoppingCart size={24}/>
            <span className='text-lg font-medium'>{cart.length}</span>
            </div>
        </header>

        <div className='relative w-full nmb-8 overflow-hidden rounded-lg shadow'>
            <img src={carousel_images[currentSlide]} alt='featured' className='w-full h-60 object-cover'/>
            <button onClick={prevSlide} className="absolute top-1/2 left-3 bg-black/50 text-white px-3 py-1 rounded"> ❮ </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-3 bg-black/50 text-white px-3 py-1 rounded">❯</button>
        </div>

        {/* filters */}
        <div className='grid mid:grid-cols-3 gap-4 mb-6'>
            <input type='text' className='border rounded p-2 w-full'
             placeholder='Search Products Here...'
             value={search} onChange={(e)=> setSearch(e.target.value)}/>
             
             <select className='border rounded p-2 w-full' value={category} 
             onChange={(e)=>setCategory(e.target.value)}> 
             {categories.map((c,i)=>(
                <option key={i} value={c}>{c}</option>
             ))}
             </select>

             <div className='flex flex-col'>
                <label className='text-sm font-medium mb-1'> Max Price: ${maxPrice}</label>
                <input type='range' min='10' max='2000' step='10' value={maxPrice} 
                onChange={(e)=> setMaxPrice(Number(e.target.value))}/>  
             </div>
        </div>

        {/* Product Grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredProducts.length>0?
        (filteredProducts.map((product) => (
            <div key={product.id}
            className='border rounded-lg p-4 shadow hover:shadow-lg transition'
            >
                <img
                src={product.image}
                alt={product.title}
                className='w-full h-40 object-contain mb-3 rounded'/>
                <h2 className='text-lg font-semibold'>{product.title}</h2>
                <p className='text-gray-500'>{product.category}</p>
                <p className='font-bold text-blue-600'>${product.price}</p>
                <button onClick={()=> handleAddToCart(product)}
                    className='mt-3 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                        Add To CART
                    </button>
            </div>
        ))):(
            <p className='text-gray-500'>No Products Found</p>
        )
        }

        </div>

    </div>
  )
}

export default EcommercePage