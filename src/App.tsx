import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { routes } from './Routes'

export function App() {

  return (
    <BrowserRouter basename='/portfolio'>
      <Routes>
        {
          routes.map(({element,path},index) => <Route key={index.toString()} path={path} element={element} />)
        }
      </Routes>
    </BrowserRouter>
  )
}
