import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux'
import Router from './routes/Router.jsx'
import './index.css'
import portfolioStore from './controllers/Store.jsx'
 
createRoot(document.getElementById('root')).render(
  <>
    <Provider store={portfolioStore}>
      <RouterProvider router={Router} />
    </Provider>
  </>,
)
