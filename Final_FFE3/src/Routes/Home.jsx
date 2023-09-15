import { useContext } from 'react'
import Card from '../components/Card'
import { GlobalContext } from '../components/utils/global.context.jsx'
const Home = () => {
  const { dentistas } = useContext(GlobalContext)


  return (
    <div  >
      <h1>Nuestros Especialistas</h1>
        <div className='grid'>
          {dentistas.map((dentista) => (
            <Card key={dentista.id} dentista={dentista} />
          ))}
        </div>
    </div>
  )
}

export default Home