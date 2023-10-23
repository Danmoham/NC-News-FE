import { Link } from 'react-router-dom'
export const NavBar = () =>{
    return <div id="navBar">
        <nav >
            <Link to="/articles">All Articles</Link>  |  <Link to="/articles/ArticleIdSelector"> Article By Id</Link>
        </nav>
    </div>
}