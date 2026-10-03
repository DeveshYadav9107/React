import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Details from './components/Details.jsx'
import Error from './components/Error.jsx'
import Zero from './components/Zero.jsx'
import Hi from './components/Hi.jsx'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to='/'>Home</Link>
          <br />
          <Link to='/about'>About</Link>
          <br />
          <Link to='/contact'>Contact</Link>
          <br />
          <Link to='/details'>Details</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/details' element={<Details/>}> 
            <Route index element={<Zero/>} ></Route>
            {/* index element ka mtlb hota hai ki parent route pr jate hai kuch attached file hogi vo bhi load ho jayegi */}
            <Route path='Hi' element={<Hi/>} ></Route>
            {/* idhr path m / nhi ayega as they are nested routes hai agr / bhi likhenge toh vo root page ke hissab se dhundega jisse error aa jayega  */}
          </Route>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
