import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/BlogPage/HomePage/HomePage";
import ArticleView from "./components/BlogPage/HomePage/Article/ArticleView";
import OutletFeed from "./components/BlogPage/HomePage/OutletFeed";
import WriteHere from "./components/BlogPage/WriteHere/WriteHere";
// import { Landing } from "./components/Landing/Landing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404: Page Not Found</h1>,
  },
  
  {
    path: "/Blogs",
    element: <HomePage />,
    errorElement: <h1>404: Page not found</h1>,
    children: [
      {
        path: "/Blogs",
        element: <OutletFeed />,
      },
      {
        path: "/Blogs:id",
        element: <ArticleView />,
      },
    ],
  },

  {
    path: "/Blogs/write",
    element: <WriteHere />,
  },
]);
