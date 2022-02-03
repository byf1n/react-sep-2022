import {
    Routes, Route, Link
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Users from "./pages/layout/Users";
import Posts from "./pages/layout/Posts";
import Comments from "./pages/layout/Comments";
import UserDetails from "./pages/layout/UserDetails";

const App = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/layout'}>Layout</Link></li>
            </ul>

            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/layout'} element={<Layout/>}>
                    <Route path={'/layout/users'} element={<Users/>}>
                        <Route path={'/layout/users/:id'} element={<UserDetails/>}/>
                    </Route>
                    <Route path={'/layout/posts'} element={<Posts/>}/>
                    <Route path={'/layout/comments'} element={<Comments/>}/>
                </Route>

            </Routes>

        </div>
    );
};

export default App;
