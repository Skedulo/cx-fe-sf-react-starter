import * as React from 'react'

import { ToastContainer } from 'react-toastify'
import { SWRConfig } from 'swr'

import MainPage from './pages/index'
import 'react-toastify/dist/ReactToastify.css'
import { fetchStatusMiddleware } from './hooks/useSWR'

const App: React.FC = () => {
  return (
    <SWRConfig
      value={{
        use: [fetchStatusMiddleware],
      }}
    >
      <MainPage />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        pauseOnHover={true}
        hideProgressBar={true}
        className="cx-z-9999"
      />
    </SWRConfig>
  )
}

export default App
