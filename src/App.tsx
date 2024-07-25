/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import './App.css'
// import * as module from '../dist/wood-deck@1.0.4.js'
// import * as module from 'https://cdn.jsdelivr.net/gh/lampd-tgl/wood-deck@main/dist/wood-deck@1.0.9.js'

function App() {
  const [Component, setComponent] = useState<React.FC | null>(null)

  useEffect(() => {
    const getComponent = async () => {
      // Import module dynamically
      const module = await import(
        'https://cdn.jsdelivr.net/gh/lampd-tgl/wood-deck@main/dist/wood-deck@1.0.14.js'
      )
      setComponent(() => module.WoodDeck)
    }
    getComponent()
    // console.log(Component, 'module')
    // console.log(window, 'window')
  }, [])
  console.log(Component, 'module')

  return Component ? <Component /> : null
  // return <></>
}

export default App
