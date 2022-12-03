import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css";

export default function Navbar({userData ,logout}) {
  let platforms = [
    {platform:'pc', title:'Pc'},
    {platform:'browser', title:'Browser'}
]
let sorts = [
  {sort:'release-date', title:'Release-date'},
  {sort:'popularity', title:'Popularity'},
  {sort:'alphabetical', title:'Alphabetical'},
  {sort:'relevance', title:'Relevance'},

]
let categories = [
  {category:'racing', title:'Racing'},
  {category:'sports', title:'Sports'},
  {category:'social', title:'Social'},
  {category:'shooter', title:'Shooter'},
  {category:'zombie', title:'Zombie'},
  {category:'fantasy', title:'Fantasy'},
  {category:'mmorpg', title:'Action-rbg'},
  {category:'action', title:'Action'},
  {category:'flight', title:'Flight'},
  {category:'battle-royale', title:'Battle-royale'},



]
  return (
    <>
    <nav className={`${styles.navBg} navbar navbar-expand-lg navbar-dark fixed-top py-1`}>
  <div className="container">
    <Link className={`${styles.logo} navbar-brand fs-2`} to="">Game Over</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      {userData?<> <ul className="navbar-nav me-auto mx-5">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="all">All</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Platforms
          </a>
          <ul className="dropdown-menu">
            {platforms.map((platform,index)=><li><Link className="dropdown-item" key={index} to={`platforms/${platform.platform}`}>{platform.title}</Link></li>
)}    
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Sort-by
          </a>
          <ul className="dropdown-menu">
          {sorts.map((sort,index)=><li><Link className="dropdown-item" key={index} to={`sort-by/${sort.sort}`}>{sort.title}</Link></li>
)}  
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Categories
          </a>
          <ul className="dropdown-menu">
          {categories.map((category,index)=><li><Link className="dropdown-item" key={index} to={`categories/${category.category}`}>{category.title}</Link></li>
)}  
          </ul>
        </li>          
      </ul>
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item d-flex align-items-center">
          <span className='me-3'>Hello, <Link to='profile' style={{'color':'#ef074b', 'borderBottom':'1px solid #ef074b','fontWeight':'800'}}>{userData.first_name}</Link></span>
          <button onClick={logout}>Log Out</button>
        </li>
              
      </ul></>:<ul className="navbar-nav ms-auto ">
        <li className="nav-item d-flex align-items-center">
          <button className='btn btn-outline-info me-2'><Link className='text-white' to='/login'>Login</Link></button>
          <button><Link className='text-white' to='/register'>Join for Free</Link></button>
        </li>
        
              
      </ul>}
    </div>
  </div>
</nav>
    </>
  )
}
