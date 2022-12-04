import React from 'react'
import useFetch from '../../Hooks/useFetch.jsx';
import Item from '../Item/Item.jsx'
import Loading from '../Loading/Loading.jsx';

export default function AllGames() {
  const{dataArray, shownGames, showMore, isLoading}=useFetch(null);

  return (
    <>
    {isLoading?<Loading/>:<div className="row gy-3 mt-5 pt-5">
        {dataArray.slice(0,shownGames).map((game,index)=>(<Item data={game} unique={index} key={index}/>))}
        <div className="div text-center"><button className='my-5' onClick={showMore}>Show More Games</button></div>     
    </div>}    
    </>
  )
}
