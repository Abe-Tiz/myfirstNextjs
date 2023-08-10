import React from 'react'
import Link from 'next/link';

async function fetchContent(name) {

    await new Promise(resolv =>setTimeout(resolv,3000));

    const respons = await fetch(`https://api.github.com/repos/Abe-Tiz/${name}/contents`,
        {
            //validate after 1 minu new repositories add 
            next:{
                revalidate:60
            }
        })
            const res =  respons.json();
        return res
    }


const RepoDirs = async ({name}) => {

    const contents = await fetchContent(name);
    const dirs = contents.filter((content) => content.type=== 'dir')
    
  return (
    <>
        <h1>Directories</h1>
        <ul>
            {dirs.map(dir =>
                <li key={dir.path}>
                    <Link href={`/code/repos/${name}/${dir.path}`}>
                        {dir.path}
                    </Link>
                </li>
            )}
        </ul>
    </>
  )
}

export default RepoDirs