import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Routes/Home'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'
import Contact from './Routes/Contact'
import Layout from './Layout'
import ThemeContext, {themes} from './components/utils/theme.context'
import { useState } from 'react';
import './App.css'

function App() {

  const [theme, setTheme] =useState(themes.light);
  const handleChangeTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };

  return (
    <>
      <div className='App'>
      <ThemeContext.Provider value={{theme, handleChangeTheme}}>      
        <Layout>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='favs' element={<Favs />} />
              <Route path='contact' element={<Contact />} />
              <Route path='/detail/:id' element={<Detail />} />
              <Route path="/*" element={<Navigate to ='/'/>}></Route>
            </Routes>
            <Footer />
        </Layout>
      </ThemeContext.Provider>
      </div>
    </>
  )
}

export default App