import { useState, useEffect } from "react"
import Search from "./components/Search.jsx"
import WeatherCard from './components/WeatherCard.jsx'

function App(){
  const [input, setInput] = useState('')
  const [weather, setWeather] = useState(() => {
    let saved = localStorage.getItem('weather')

    return saved ? JSON.parse(saved) : null
  })
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  
  useEffect(() => {
    const API_KEY = '4147cf3a2ff5080a30b9dfce63531226'

    function handleOnline(){
      setIsOnline(true)
    }

    function handleOffline(){
      setIsOnline(false)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    async function searchWeather(city) {
      if (!city.trim()) return;
      try {
        let response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=ru`)

        if(!response.ok) {
          throw new Error("Error with API")
        }

        let data = await response.json()
        setWeather(data)
        localStorage.setItem("weather", JSON.stringify(data))

      } catch(e) {
        console.log(e)
      }
    }

    let deboucInput = setTimeout(() => {
      searchWeather(input)
    }, 500)

    return () => {
      clearTimeout(deboucInput)
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [input])

  

  return(
    <div className="app">
      <h1 className="statusOnline">You are {isOnline ? 'online' : 'offline'}</h1>
      <Search input={input} setInput={setInput}/>
      {weather && <WeatherCard weather={weather}/>}
    </div>
  )
}

export default App