import './App.css';
import Contact from './pages/contact/Contact';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import  Home  from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import { Navbar } from './components/Navbar';

function App() {
  const routes=[
    { 
      route:"/portfolio",
      page:<Home /> ,
      exact : true,
      key:0
    },
    { 
      route:"/about",
      page:<About /> ,
      exact : true,
      key:1
    },
    {
      route:"/",
      page: <Portfolio />,
      exact: true,
      key:2
    },
    {
      route:"/contact",
      page:<Contact />,
      exact : true,
      key:5
    },
  
  ];


  const displayContent = ()=>{
    return routes.map((el)=>< Route key={el.key} path={el.route} element={el.page} exact = {el.exact}/>)
  } 
  return (
    
    <div className="App">
          
          <Router>
          <Navbar /> 
            <Routes>
            
            {displayContent()}

            </Routes>
          </Router>
    
    </div>
  );
}

export default App;
