import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { Amplify } from 'aws-amplify'
import reset from 'styled-reset'

import { Property } from './pages/PropertyList'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Property />} />
            </Routes>
        </BrowserRouter>
    )
}

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
`

export default App
