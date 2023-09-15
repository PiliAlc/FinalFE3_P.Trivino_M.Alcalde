import { useContext } from 'react'
import Card from '../components/Card'
import { GlobalContext } from '../components/utils/global.context.jsx'
import { Link } from 'react-router-dom'

const Favs = () => {
    const { favs } = useContext(GlobalContext)
    const uniqueFavs = favs.filter((value, index, self) => {
    return self.findIndex((item) => item.id === value.id) === index
    })

  const favoritos = uniqueFavs.map((fav) => (
    <Link key={fav.id}  to={`/detail/${fav.id}`}>
      <Card dentista={fav} />
    </Link>
  ))

  return (
    <div>
      <h1>Favoritos</h1>
      <div className='divFavoritos'>{favoritos}</div>
    </div>
  )
}

export default Favs
