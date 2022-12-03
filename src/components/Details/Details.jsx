import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import Loading from '../Loading/Loading';

export default function Details() {
    const [gameDetails, setGameDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let params = useParams();
    console.log(params.id);
   async function getDetails() {
        let url = 'https://free-to-play-games-database.p.rapidapi.com/api/game';
       let{data} = await axios.get(url,{params: {id:params.id},headers : {
        'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
         'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}});
         console.log(data);
         setGameDetails(data);
         setIsLoading(false);    
    }
    useEffect(() => {
    
      getDetails();
    }, [])
    
  return (
    <>
    {isLoading?<Loading/>:<><div className='pt-5 mt-5'>
        <div className="row">
          <div className="col-md-4">
            <img src={gameDetails.thumbnail} alt="" />
            <div className='d-flex justify-content-center align-items-center mt-2'>
            <button style={{'backgroundColor':'#382770', 'padding':'10px 20px', 'cursor':'none'}}>free</button>
            <button className='w-75 ms-2'><a className='text-white' href={gameDetails.game_url} target='_blank'>Play Now <i className="fa-solid fa-play ms-1"></i></a></button>
            </div>
          </div>
          <div className="col-md-8">
            <h3>{gameDetails.title}</h3>
            <h5 style={{'color':'#ef074b'}} className='fw-bold'>{`About ${gameDetails.title}`}</h5>
            <p>{gameDetails.description}</p>
            {gameDetails.minimum_system_requirements?<h5 style={{'color':'#ef074b'}} className='fw-bold'>Minimum System Requirements:</h5>:""}
            {gameDetails.minimum_system_requirements?.graphics!= null?<p><span className='fw-bold'>graphics:</span> {gameDetails.minimum_system_requirements?.graphics}</p>:""}
            {gameDetails.minimum_system_requirements?.memory!=null?<p><span className='fw-bold'>memory:</span> {gameDetails.minimum_system_requirements?.memory}</p>:""}
            {gameDetails.minimum_system_requirements?.os!=null?<p><span className='fw-bold'>os:</span> {gameDetails.minimum_system_requirements?.os}</p>:""}
            {gameDetails.minimum_system_requirements?.processor!=null?<p><span className='fw-bold'>processor:</span> {gameDetails.minimum_system_requirements?.processor}</p>:""}
            {gameDetails.minimum_system_requirements?.storage!=null?<p><span className='fw-bold'>storage:</span> {gameDetails.minimum_system_requirements?.storage}</p>:""}           
            {gameDetails.screenshots?.length!=0?<><h5 style={{'color':'#ef074b'}} className='fw-bold'>{`${gameDetails.title} Screenshots`}</h5>
            <Carousel>
              {gameDetails.screenshots?.map((shot,index)=>(
                <Carousel.Item interval={1000} key={index}>
                <img
                  className="d-block w-100"
                  src={shot.image}
                  alt="screenshot"
                />               
              </Carousel.Item>
              ))}
     
            </Carousel></>:""}
            <h5 style={{'color':'#ef074b'}} className='mt-5 fw-bold'>Additional Information</h5>
            <div className='row py-4'>
              <div className="col-md-4"><p>Title<br/><span style={{'color':'#ef074b'}} className='fw-semibold'>{gameDetails.title}</span></p></div>
              <div className="col-md-4"><p>Developer<br/><span style={{'color':'#ef074b'}} className='fw-semibold'>{gameDetails.developer}</span></p></div>
              <div className="col-md-4"><p>Publisher<br/><span style={{'color':'#ef074b'}} className='fw-semibold'>{gameDetails.publisher}</span></p></div>
              <div className="col-md-4"><p>Release Date<br/><span style={{'color':'#ef074b'}} className='fw-semibold'>{gameDetails.release_date}</span></p></div>
              <div className="col-md-4"><p>Genre<br/><span style={{'color':'#ef074b'}} className='fw-semibold'>{gameDetails.genre}</span></p></div>
              <div className="col-md-4"><p>Platform<br/>
              <span style={{'color':'#ef074b'}} className='fw-semibold me-2'>{gameDetails.platform}</span>
              <span style={{'color':'#ef074b'}}>{gameDetails.platform == "Windows" ?<i className='fab fa-windows'></i>:<i className='fas fa-window-maximize'></i>}</span>
              </p></div>
            </div>
            <div>    
            </div>


          </div>
        </div>
    </div></>}
    
    </>
  )
}
