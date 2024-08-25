import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Examples from './components/Examples'
import AlertDismissible from './components/AlertDismissible'
import ToastApp from './components/Toast'
import ContainerExample from './components/ContainerExample'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Examples></Examples>
      <AlertDismissible></AlertDismissible>
      <ToastApp></ToastApp>
      <ContainerExample></ContainerExample>
    </>
  )
}

export default App
