/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

  const VALUE_KEY = 'favs'

  const [dentistas, setDentistas] = useState([])
  
  const [favs, setFavs] = useState([])

  async function fetchDentistas() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const jsonData = await response.json()
    setDentistas(jsonData)
  }

  useEffect(() => {
    fetchDentistas()

    const storedFavs = localStorage.getItem(VALUE_KEY)
    if (storedFavs) {
      setFavs(JSON.parse(storedFavs))
    }
  }, [])

  const addFav = (id) => {
    const selectedDentista = dentistas.find((dentista) => dentista.id === id)

    if (selectedDentista) {
      const newFav = {
        name: selectedDentista.name,
        username: selectedDentista.username,
        id: selectedDentista.id,
      }

      const updatedFavs = [...favs, newFav]
      setFavs(updatedFavs)
      localStorage.setItem(VALUE_KEY, JSON.stringify(updatedFavs))
    }
  }

  const removeFav = (id) => {
    const updatedFavs = favs.filter((fav) => fav.id !== id)
    setFavs(updatedFavs)
    localStorage.setItem(VALUE_KEY, JSON.stringify(updatedFavs))
  }

  const contextValue = {
    dentistas,
    favs,
    addFav,
    removeFav,
  }

  return (
    <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider }
