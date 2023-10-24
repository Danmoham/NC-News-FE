import { Link } from 'react-router-dom'
export const NavBar = () =>{
    return <div id="navBar">
        <nav >
        <Link to="/articles/topics"><button className='navBut'>Topics</button></Link>   <Link to="/articles"><button className='navBut'>All Articles</button></Link>   <Link to="/articles/ArticleIdSelector"><button className='navBut'> Search Article By Id</button></Link>
        </nav>
    </div>
}