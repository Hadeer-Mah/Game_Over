import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Item from '../Item/Item.jsx'
import Loading from '../Loading/Loading.jsx';

export default function AllGames() {
    const [allGames, setAllGames] = useState([])
    const [shownGames, setShownGames] = useState(20)
    const [isLoading, setIsLoading] = useState(true)
    const showMore =()=>{
      setShownGames(shownGames + 20)
  }
   async function getAll(params) {      
      let url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
      let{data} = await axios.get(url,{headers : {
       'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}});
        console.log(data);
        setAllGames(data);
        setIsLoading(false);
    }
    useEffect(() => {
      getAll();
    }, [])
    

  return (
    <>
    {isLoading?<Loading/>:<div className="row gy-3 mt-5 pt-5">
        {allGames.slice(0,shownGames).map((game,index)=>(<Item data={game} unique={index} key={index}/>))}
        <div className="div text-center"><button className='my-5' onClick={showMore}>Show More Games</button></div>     
    </div>}    
    </>
  )
}
