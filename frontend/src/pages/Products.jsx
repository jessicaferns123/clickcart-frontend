import FilterSidebar from "@/components/FilterSidebar";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "@/components/ProductCard";
import { toast } from 'sonner';
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "@/redux/productSlice";
import { WifiOff } from "lucide-react";


const Products = () => {
    const {products} = useSelector(store=>store.products)
    const [allProducts, setAllProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("All")
    const [brand, setBrand] = useState("All")
    const [priceRange, setPriceRange] = useState([0,999999])
    const [sortOrder, setSortOrder] = useState("");
    const [loadError, setLoadError] = useState("")
    const dispatch = useDispatch()

    useEffect(()=>{
      if(allProducts.length === 0) return;

      let filtered = [...allProducts]

      if(search.trim() !== ""){
        filtered = filtered.filter(p => p.productName?.toLowerCase().includes(search.toLowerCase()))
      }

      if(category !== "All"){
        filtered = filtered.filter(p => p.category === category)
      }

      if(brand !== "All"){
        filtered = filtered.filter(p => p.brand === brand)
      }

      filtered = filtered.filter(p => p.productPrice >= priceRange[0] && p.productPrice <= priceRange[1])

      if(sortOrder === 'lowToHigh'){
        filtered.sort((a,b) => a.productPrice - b.productPrice)
      }
      else if(sortOrder === 'highToLow'){
        filtered.sort((a,b) => b.productPrice - a.productPrice)
      }

      dispatch(setProducts(filtered))
    },[search,category,brand,priceRange,sortOrder,allProducts,dispatch])

    useEffect(() => {
        const getAllProducts = async() => {
            try {
                setLoading(true)
                setLoadError("")
                const res = await axios.get(`http://localhost:8000/api/v1/product/getallproducts`);
                if(res.data.success){
                    setAllProducts(res.data.products)
                    dispatch(setProducts(res.data.products))
                }
            } catch (error) {
                console.log(error)
                // Network errors (e.g. backend not running) have no `response`
                const message = error.response?.data?.message
                    || "We couldn't load products because the ClickCart API isn't available. This frontend showcase doesn't include the backend."
                setLoadError(message)
                dispatch(setProducts([]))
                toast.error("Products could not be loaded")
            }
            finally{
                setLoading(false)
            }
        }

        getAllProducts()
    },[dispatch])

  return (
    <div className="pt-20 pb-10">
      <div className="max-w-7xl mx-auto flex gap-7">
        {/* sidebar */}
        <FilterSidebar allProducts={allProducts} priceRange={priceRange} setPriceRange={setPriceRange} search={search} setSearch={setSearch} brand={brand} setBrand={setBrand} category={category} setCategory={setCategory} />
        {/* Main product section */}
        <div className="flex flex-col flex-1">
          <div className="flex justify-end mb-4">
            <Select onValueChange={(value)=> setSortOrder(value)}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Sort by Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="lowToHigh">Price: Low to High</SelectItem>
                  <SelectItem value="highToLow">Price: High to Low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* load error message */}
          {
            loadError && !loading && (
              <div role="alert" className="mx-auto mt-6 max-w-lg rounded-xl border border-pink-200 bg-pink-50 p-8 text-center">
                <WifiOff className="mx-auto h-10 w-10 text-pink-600" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-semibold text-gray-800">Products unavailable</h2>
                <p className="mt-2 text-sm text-gray-600">{loadError}</p>
              </div>
            )
          }
          {/* product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
            {
                products.map((product) => {
                    return <ProductCard key={product._id} product={product} loading={loading}/>
                })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
