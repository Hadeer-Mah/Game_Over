import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from "./Home.module.css";
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading.jsx'

export default function Home() {
    const [homeLayout, setHomeLayout] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    async function getData() {

      let url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
       let{data} = await axios.get(url,{params: {'sort-by':'popularity'},headers : {
        'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
         'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}});
         console.log(data);
         setHomeLayout(data);
         setIsLoading(false);
   }
    
    useEffect(() => {
      getData();
    }, [])
    

  return (
    <>
    <div className={`${styles.homeBg} container pt-5 mt-5`}>
      {isLoading?<Loading/>:<><div className='text-center pt-4'>
        <h1>Find & track the best <span>free-to-play</span> games!</h1>
        <p>Track what you've played and search for what to play next! Plus get free premium loot!</p>
        <button><Link to='/all' className='text-white'>Browse Games</Link></button>
      </div>
      <div className="sec-part pt-5 mt-5">
        <h3>Personalized Recommendations</h3>
      <div className="row mt-4">
        {homeLayout.splice(0,3).map((item,index)=> (
          <div className="col-md-4" key={index}>
          <Link to={`/details/${item.id}`} className='text-white'>
          <div className={styles.item}>
            <img src={item.thumbnail} alt="" className='w-100' />
            <div className='d-flex justify-content-between align-items-center py-3 px-3'>
              <h5>{item.title}</h5>
              <div className={styles.badge}>free</div>
              </div>
          </div>
          </Link>
        </div>
          
        ))}        
      </div>
      </div></>}
      
      
    </div>
    </>
  )
}
