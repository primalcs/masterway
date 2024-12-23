import Main from './pages/Main.tsx'
import About from './pages/About.tsx'
import {BrowserRouter as Router,Routes,Route,NavLink} from 'react-router';


function App() {
  const navigationActive = (({isActive}:{isActive:boolean})=>{
    return {
      color:isActive?'red':'black',
      textDecoration: 'none'
    }
  })
  return (
    <div className="App">
    <Router basename='/masterway'>
      <nav>
        <NavLink style={navigationActive} to="/"> Home </NavLink>
        <NavLink style={navigationActive} to="/about"> About </NavLink>
        <> </>
        <NavLink style={navigationActive} to="/contact"> Contact </NavLink>
        <> </>
        <NavLink style={navigationActive} to="/test"> Test </NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
   </div>
  )
}

export default App
