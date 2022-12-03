import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Item from '../Item/Item.jsx'
import Loading from '../Loading/Loading.jsx';
import NotFound from '../NotFound/NotFound.jsx';

export default function Platforms() {
    const [shownGames, setShownGames] = useState(20)
    const [platformGames, setPlatformGames] = useState([]);
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    let Params = useParams();
    const showMore =()=>{
        setShownGames(shownGames + 20)
    }
    async function getPlatform() {
      let url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
       let{data} = await axios.get(url,{params: {platform: Params.platform},headers : {
        'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
         'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}});
         console.log(data);
         setPlatformGames(data);
         setIsLoading(false);
    }
    useEffect(() => {
      getPlatform(Params).catch(err=>{
        setIsLoading(false)
        setIsError(true)
      })
    
    }, [Params])
    
  return (
    <>
    {isError?<NotFound/>:""}
    {isLoading?<Loading/>:<div className="row gy-3 mt-5 pt-5">
        {platformGames.slice(0,shownGames).map((game,index)=>(<Item data={game} unique={index} key={index}/>))}
        <div className="div text-center"><button className='my-5' onClick={showMore}>Show More Games</button></div>
    </div>}    
    </>
  )
}
