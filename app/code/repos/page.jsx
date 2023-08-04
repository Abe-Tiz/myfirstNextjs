import {FaStar,FaCodeBranch,FaEye} from 'react-icons/fa'
import Link from 'next/link'

async function fetchData() {
    const respons = await fetch(`https://api.github.com/users/Abe-Tiz/repos`,
                    {
                        next:{
                            revalidate:60
                        }
                    }
                )
                    if (!respons.ok) {
                    throw new Error('Failed to fetch data')
                    }
                    const res =  respons.json();
                    //load/wait for one second 
                    await new Promise(resolv =>setTimeout(resolv,1000));
                    return res
                }

const ReposPage = async () => {
 
   const repos = await fetchData();
//    console.log(repos);

  return (
    <>
       <div className="repos-container">
       <h2>My Github Repositories</h2>
       <ul className='repo-list'>
          {repos.map(repo => (
            <li key={repo.id}>
                <Link href={`/code/repos/${repo.name}`}>
                    <h3>{repo.name}</h3>
                    <p>{repo.description}</p>
                    <div className='repo-details'>
                        <span>
                            <FaStar />{repo.stargazers_count}
                        </span>
                        <span>
                            <FaCodeBranch />{repo.forks_count}
                        </span>
                        <span>
                            <FaEye />{repo.watchers_count}
                        </span>
                    </div>
                </Link>
             </li>
          ))}
       </ul>
       </div>
    </>
    
  )
}

export default ReposPage