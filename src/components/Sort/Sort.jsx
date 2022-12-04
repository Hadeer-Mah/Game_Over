import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch.jsx';
import Item from '../Item/Item.jsx'
import Loading from '../Loading/Loading.jsx';
import NotFound from '../NotFound/NotFound.jsx';

export default function Sort() {   
    let Params = useParams();
    let type = {'sort-by': Params.sort};
    const{dataArray, shownGames, showMore, isLoading, isError}=useFetch(type);

  return (
    <>
        {isError?<NotFound/>:""}
    {isLoading?<Loading/>:<div className="row gy-3 mt-5 pt-5">
        {dataArray.slice(0,shownGames).map((game,index)=>(<Item data={game} unique={index} key={index}/>))}
        <div className="div text-center"><button className='my-5' onClick={showMore}>Show More Games</button></div>
    </div>}    
    </>
  )
}
