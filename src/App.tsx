import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { Amplify } from 'aws-amplify'
import { Provider } from 'react-redux'
import reset from 'styled-reset'

import { store } from './store'
import { Property } from './pages/PropertyList'
import { PropertyDetail } from './pages/PropertyDetail'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Property />} />
                    <Route path="/property/:id" element={<PropertyDetail />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
`

export default App
