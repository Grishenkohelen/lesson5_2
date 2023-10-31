import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/usersPage";
import DetailsPage from "./pages/detailsPage";
import PostPage from "./pages/postPage";

const router = createBrowserRouter([
    {
        path:'/',element:<MainLayout/>,children:[
            {index:true ,element: <Navigate to={'users'}/>},
            {path:'users',element: <UsersPage/>},
            {path:'users/details/:userId',element: <DetailsPage/>,children:[
                    {path:':postId',element: <PostPage/>}
                ]}
        ]
    }
])

export {router};