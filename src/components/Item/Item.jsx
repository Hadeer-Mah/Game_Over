import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Item.module.css";

export default function item({data , unique}) {
  return (
    <>
    <div className="col-lg-3 col-6" key={unique}>
        <Link to={`/details/${data.id}`} className='text-white'>
        <div className={styles.game}>
            <img src={data.thumbnail} alt="" className='w-100'/>
        <div className='d-flex justify-content-between align-items-center py-3 px-2'>
            <h5>{data.title.split(" ").splice(0,2).join(" ")}</h5>
            <div className={styles.badge}>free</div>
        </div>
        <p className='px-2'>{data.short_description.slice(0,25)+' ...'}</p>
        <div className='d-flex justify-content-between align-items-center py-2 px-2'>
            <div style={{'color':'#ef074b'}}><i className="fa-solid fa-square-plus fa-2x"></i></div>
            <div>
            <span className={`${styles.badge} me-2`}>{data.genre}</span>
            <span>{data.platform == "PC (Windows)" ?<i className='fab fa-windows fa-xl'></i>:<i className='fas fa-window-maximize fa-xl'></i>}</span>
            </div>
            
        </div>
    </div>
        </Link>
    </div>

    </>
  )
}
