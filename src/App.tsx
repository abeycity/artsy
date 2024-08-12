import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './components/errorboundary'
import LayoutWithRoutes from './layout/layout'




function App() {
  
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <LayoutWithRoutes/>
        </ErrorBoundary>
       </BrowserRouter>
    </>
  )
}

export default App
