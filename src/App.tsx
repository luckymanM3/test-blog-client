// node_modules
import React, { useContext, useEffect } from "react";
import {
    Route,
    Switch,
    useHistory,
    useLocation,
    Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";

// pages
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import BlogsPage from "./pages/Blogs";
import NewBlogPage from "./pages/NewBlog";
import BlogPage from "./pages/Blog";
import EditBlogPage from "./pages/BlogUpdate";
import CategoryPage from "./pages/Category";

// components
import LayoutComponent from "./components/Layout";

// store
import { fetchMe } from "./store/me-slice";

// contexts
import AuthContext from "./store/auth-context";

// consts
import { PATH } from "./consts";

// console.log("hello");

const App = () => {
    const authContext = useContext(AuthContext);
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    if (
        location.pathname !== PATH.HOME &&
        location.pathname !== PATH.LOGINREGISTER &&
        location.pathname !== PATH.LOGIN &&
        location.pathname !== PATH.REGISTER &&
        !authContext.isLoggedIn
    ) {
        history.push(PATH.LOGIN);
    }
    // alert(location.pathname);

    useEffect(() => {
        if (authContext.token) {
            dispatch(fetchMe(authContext.token));
        }
    }, [dispatch, authContext.token]);

    return (
        <LayoutComponent>
            {!authContext.isLoggedIn && (
                <Switch>
                    <Route path={PATH.HOME} exact>
                        <HomePage />
                    </Route>
                    <Route path={PATH.LOGIN}>
                        <LoginPage />
                    </Route>
                    <Route path={PATH.REGISTER}>
                        <RegisterPage />
                    </Route>
                    <Redirect from={"*"} to={PATH.HOME} />
                </Switch>
            )}
            {authContext.isLoggedIn && (
                <Switch>
                    <Route path={PATH.HOME} exact>
                        <HomePage />
                    </Route>
                    <Route path={PATH.CATEGORIES}>
                        <CategoryPage />
                    </Route>
                    <Route path={PATH.BLOGS}>
                        <BlogsPage />
                    </Route>
                    <Route path={`${PATH.BLOG}/:id`}>
                        <BlogPage />
                    </Route>
                    <Route path={PATH.NEWBLOG}>
                        <NewBlogPage />
                    </Route>
                    <Route path={`${PATH.UPDATE}/:id`}>
                        <EditBlogPage />
                    </Route>
                    {/* <Route path={`${PATH.UPDATE}`}>
                        <UpdateBlogPage />
                    </Route> */}
                    {/* <Route path={`${PATH.COMMENT}/:id`}>
                        <CommentPage />
                    </Route> */}
                    {/* <Route path={PATH.PROFILE}>
                        <ProfilePage />
                    </Route> */}
                    <Redirect from={"*"} to={PATH.HOME} />
                </Switch>
            )
            }
        </LayoutComponent >
    );
};

export default App;

// for co-author
