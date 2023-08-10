import Link from 'next/link'

 

const Course = ({courses}) => {

 
  return (
   <>
        <div className='course'>
            {
                courses.map((course) =>(
                    <div key={course.id}className='card'>
                        <h2>{course.title}</h2>
                        <small>Level:{course.level}</small>
                        <p>{course.description}</p>
                        <Link target='_blank' href={course.link} className='btn'>Go To Course</Link>
                    </div>
                )
            )}
        
        </div>
    </>
  )
}

export default Course