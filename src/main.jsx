import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global, css } from '@emotion/react'

import App from './AppStyled'

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
  html {
    font-family: "Montserrat", sans-serif;
  }
  body {
    margin: 0;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
)
