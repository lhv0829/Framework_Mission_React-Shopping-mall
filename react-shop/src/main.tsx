import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './styles/tailwind.css'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <RecoilRoot>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RecoilRoot>,
)
