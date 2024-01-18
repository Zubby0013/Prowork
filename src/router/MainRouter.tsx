import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import HomeScreen from "../pages/Home/HomeScreen";
import Register from "../pages/auth/Register";
import Signin from "../pages/auth/Signin";
import Verify from "../pages/auth/Verify";
import DashLayout from "../components/common/DashLayout";
import DashHomeScreen from "../Dashboard/DashHomeScreen";
import DashBoard from "../Dashboard/DashBoard";
import Inbox from "../Dashboard/Inbox";
import Project from "../Dashboard/Project";
import Document from "../Dashboard/Document";
import AddTask from "../Dashboard/AddTask";
import AddProject from "../Dashboard/AddProject";
import PrivateRouter from "./Private";

export const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <PrivateRouter>
                <Layout/>,
            </PrivateRouter>
        ),
        children: [
            {
                index: true,
                element: <HomeScreen/>
            }
        ]
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/login",
        element: <Signin/>
    },
    {
        path: '/verify',
        element: <Verify/>
    },
    {
        path: "/dashboard",
        element: <DashLayout/>,
        children: [
            {
                index: true,
                element: <DashHomeScreen/>
            },
            {
                index: true,
                path: 'viewdash',
                element: <DashBoard/>
            },
            {
                index: true,
                path: 'inbox',
                element: <Inbox/>
            },
            {
                index: true,
                path: 'project',
                element: <Project/>
            },
            {
                index: true,
                path: 'document',
                element: <Document/>
            },
            {
                index: true,
                path: 'addtask',
                element: <AddTask/>
            },
            {
                index: true,
                path: 'addproject',
                element: <AddProject/>
            },
        ]
    },
]);