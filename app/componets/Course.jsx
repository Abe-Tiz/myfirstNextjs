import Link from 'next/link'

async function fetchCourses(){
    const response = await fetch('http://localhost:3000/api/courses');
    const courses = await response.json(); 
    return courses;
}

const Course = async () => {

    const courses = await fetchCourses();

  return (
   <>
   <h1>Weelcome To Home page</h1>
        <div className='course'>
            {
                courses.map((course) =>(
                    <div key={course.id}className='card'>
                        <h2>{course.title}</h2>
                        <small>Level:{course.level}</small>
                        <p>{course.description}</p>
                        <Link target='_blank' href={course.link} className='btn'>Go To Course</Link>
                    </div>
                ))
            }
        
        </div>
    </>
  )
}

export default Course