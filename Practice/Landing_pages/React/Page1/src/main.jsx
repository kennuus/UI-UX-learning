/* dependencies */
import React from 'react'
import ReactDOM from 'react-dom/client'
import About_me from './components/About_me'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

/* components */
import {Error_page as Error} from './components/Error_page'

export async function loader({request}) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <About_me />,
    errorElement: <Error />,
    loader: {loader}
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
