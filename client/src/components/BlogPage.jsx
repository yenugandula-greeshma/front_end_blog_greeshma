
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards'
import Pagination from './Pagination'
import CategorySection from './CategorySection'
import SideBar from './SideBar'

const BlogPage = () => {
    const[blogs,setBlogs]=useState([])
    const[currentPage,setCurrentPage]=useState(1)
    const pageSize=12;
    const[selectedCategory,setSelectedCategory]=useState(null)
    const[activeCategory,setActiveCategory]=useState(null)

    

    useEffect(()=>{
      let url=`https://blog-react-app-greeshma-server.vercel.app/blogs?page=${currentPage}&limit=${pageSize}`

    // selected category
    if(selectedCategory){
      url+=`&category=${selectedCategory}`
    }
        axios.get(url)
       .then(response=>{
        setBlogs(response.data)
       })
      
    },[currentPage,pageSize,selectedCategory])
    // console.log(blogs);

    const handlePageChange=(pageNumber)=>{
      setCurrentPage(pageNumber)
    }

    const handleCategoryChange=(category)=>{
      setSelectedCategory(category)
      setCurrentPage(1)
      setActiveCategory(category)
    }

  return (
    <div>

      {/* blog category */}
      <div>
        <CategorySection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
      </div>
      {/* blog card */}
      <div className='flex flex-col lg:flex-row gap-12'>
       <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>

       {/* side bar */}
       <div>
        <SideBar/>
       </div>
      </div>
      {/* pagination section */}
      <div>
        <Pagination blogs={blogs} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange}/>
      </div>
    </div>
  )
}

export default BlogPage