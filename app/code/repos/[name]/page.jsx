import Repo from '@/app/componets/Repo'
import RepoDirs from '@/app/componets/RepoDirs'
import Link from 'next/link'
import { Suspense } from 'react'


 const RepoPage = ({params :{name}}) => {

 
  return (
    <div className='card'>
      <Link className='btn btn-back' href='/code/repos' >Back To Repositories</Link>

      <Suspense fallback={<div>Loading Repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading Directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
     
     </div>
  )
}

export default RepoPage