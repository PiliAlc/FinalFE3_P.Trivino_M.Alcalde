import ThemeContext from './components/utils/theme.context';
import { useContext } from "react";


const Layout = ({children}) => {

const {theme} =useContext(ThemeContext)
  return (
    <div style={{background:theme.background, color:theme.font}}>
        {children}
    </div>
  )
}

export default Layout