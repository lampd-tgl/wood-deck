/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import './App.css'
import * as module from '../dist/wood-deck@1.0.0.js'

function App() {
  const [Component, setComponent] = useState<React.FC | null>(null)

  useEffect(() => {
    const getComponent = async () => {
      // Import module dynamically
      const module = await import(
        'https://cdn.jsdelivr.net/gh/lampd-tgl/wood-deck@main/dist/wood-deck@1.0.0.js'
      )
      setComponent(() => module.WoodDeck)
    }

    getComponent()
  }, [])

  return Component ? <Component react={React} /> : null
}

export default App
