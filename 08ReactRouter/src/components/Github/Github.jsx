import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect (()=>{
      fetch('https://api.github.com/users/onkarhol999')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
    },[])
  return (
    <div className=' text-center m-4 bg-gray-500 text-white text-3xl'> Github  Followers : {data.followers}
    <img src={data.avatar_url} alt='Git Picture' width={300} ></img>
     </div>
  )
}

export default Github
