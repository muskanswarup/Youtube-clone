import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Watch from "./components/Watch";
import Feed from "./components/Feed";
// import SearchResults from "./components/SearchResults";


// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body/>,
//     children:[
//       {
//         path:"/",
//         element:<Feed/>
//       },
//       {
//         path:"/watch",
//         element:<Watch/>
//       }
      
//     ]
//   }
// ])

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body />,
//     children: [
//       {
//         path: "/",
//         element: <Feed />
//       }
//       // {
//       //   path:"/results",
//       //   element: <SearchResults/>
//       // }
//     ]
//   },
//   {
//     path: "/watch",
//     element: <Watch />
//   }
// ]);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <Feed /> }
    ]
  },
  { path: "/watch", element: <Watch /> },
  // Fallback route
  { path: "*", element: <Body /> }
]);



function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={appRouter} />
    </div>  
  );
}

export default App;
