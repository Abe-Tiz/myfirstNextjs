  'use client'
import {useState,useEffect} from 'react'
import Course from './componets/Course'
import LoadingPage from './loading';
import CourseSearch from './componets/CourseSearch';

const page = () => {
const[courses,setCourses] =useState([]);
const[loading,setLoading] = useState(true);

  useEffect(()=>{
    const fetchCourses = async () =>{
      const res = await fetch('api/courses');
      const dats = await res.json();
      setCourses(dats);
      setLoading(false);
    }

    fetchCourses();
  },[])

  if(loading){
    return <LoadingPage />
  }

  return (
    <> 
      <h1>Welcome To Home page</h1>
      <CourseSearch  getSearcherResults={(results) =>setCourses(results)}/>
      <Course  courses={courses} />
    </>
    
  )
}

export default page