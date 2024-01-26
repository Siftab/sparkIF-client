import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './mainLayout/MainLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen flex justify-center items-center'>
       {/* <h1 className='text-6xl'>SparkIf</h1> */}
      <MainLayout></MainLayout>
    </div>
  )
}

export default App
