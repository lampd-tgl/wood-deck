/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [Component, setComponent] = useState<React.FC | null>(null)

  useEffect(() => {
    const getComponent = async () => {
      const { App } = await import(
        'https://cdn.jsdelivr.net/gh/lampd-tgl/wood-deck@main/dist/wood-deck.js'
      )
      setComponent(() => App)
    }

    getComponent()
  }, [])

  return Component ? <Component /> : null
}

export default App
