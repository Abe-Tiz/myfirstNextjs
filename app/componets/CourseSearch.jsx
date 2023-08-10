   'use client'
import { useState } from 'react'
   
    const CourseSearch = ({ getSearcherResults }) => {
        const[query,setQuery] = useState('');


        const handleOnChange = (e)=>{
            setQuery(e.target.value);
        }
        
        const handleSubmit =async (e)=>{
            e.preventDefault();
            const res = await fetch(`/api/courses/search?query=${query}`);
            const courses =await res.json();
            getSearcherResults(courses);
        }
     return (
    
        <form  onSubmit={handleSubmit} className='search-form'>
           <input
                type="text"
                className='search-input' 
                placeholder='search course...'
                value={query}
                onChange={handleOnChange}
            />
            <button  className='search-button'type='submit'>Search</button>
        </form>
      
     )
   }
   
   export default CourseSearch
