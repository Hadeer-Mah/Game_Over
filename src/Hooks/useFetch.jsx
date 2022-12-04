import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function useFetch(Params) {
    const [dataArray, setdataArray] = useState([]);
    const [shownGames, setShownGames] = useState(20);
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const showMore =()=>{
        setShownGames(shownGames + 20)
    }
    async function getData() {
        let url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
         let{data} = await axios.get(url,{params: Params,headers : {
          'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
           'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}});
           console.log(data);
           setdataArray(data);
           setIsLoading(false);            
      }
      useEffect(() => {
        getData(Params).catch(error=>{
          setIsLoading(false)
          setIsError(true)
        })
      }, [Params])
      return {dataArray, shownGames, showMore, isLoading, isError}
}
