import {lazy} from "react";
const HomePage = lazy(() => import("pages/Home"));


const routes = [
    {path: "/", exact: true, component: HomePage},
];

export default routes;


