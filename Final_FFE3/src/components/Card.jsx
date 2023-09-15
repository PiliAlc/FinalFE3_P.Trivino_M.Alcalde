/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { GlobalContext } from './utils/global.context.jsx'
import { Link } from 'react-router-dom'
import image from "../assets/doctor.jpg";

const Card = ({ dentista }) => {
  const { addFav, removeFav, favs } = useContext(GlobalContext)

  const { id, name, username } = dentista
  const isFavorito = favs.some((fav) => fav.id === id)

  const handleAddFav = (e) => {
    e.preventDefault()
    if (isFavorito) {
      removeFav(id)
    } else {
      addFav(id)
    }
  }

  return (
      <div className='containerOdontologos'>
        <Link to={`/detail/${id}`}>
          <div className='cardsOdontologos'>
            <img src={image} className='cardsOdontologosImagen' alt='doctor' />
            <p className='cardsOdontologosName'> {name} </p>
            <p className='cardsOdontologosUsername'>{username}</p>
            <button className='botonFavoritos' onClick={handleAddFav} >
            {isFavorito ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
            </button>
          </div>
        </Link>
      </div>
        )
}

export default Card
