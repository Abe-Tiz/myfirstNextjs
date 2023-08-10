import React from 'react'
import{FaStar,FaCodeBranch,FaEye} from 'react-icons/fa'


async function fetchData(name) {
    const respons = await fetch(`https://api.github.com/repos/Abe-Tiz/${name}`, {
        next:{
            revalidate:60
        }
    })

    if (!respons.ok) {
    throw new Error('Failed to fetch data')
    }

    const res =  respons.json();
    return res
}

const Repo =async ({name}) => {

    const repos = await fetchData(name);
    //    console.log(repos);

  return (
    <>
        <h2>{repos.name}</h2>
        <p>{repos.description}</p>
        <div className='card-stats'>
            <div className='card-stat'>
                <FaStar />
                <span>{repos.stargazers_count}</span>
            </div>
            <div className='card-stat'>
                <FaCodeBranch />
                <span>{repos.forks_count}</span>
            </div>
            <div className='card-stat'>
                <FaEye />
                <span>{repos.watchers_count}</span>
            </div>

        </div>
            
    </>
  )
}

export default Repo