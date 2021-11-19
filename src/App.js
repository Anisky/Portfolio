import logo from './logo.svg';
import './App.css';
import Contact from './pages/contact/Contact';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { Home } from './pages/home/Home';

function App() {
  const routes=[
    {
      route:"/contact",
      page:Contact ,
      exact : true,
      key:5
    },
  
  ];


  const displayContent = ()=>{
    return routes.map((el)=>< Route key={el.key} path={el.route} component={el.page} exact = {el.exact}/>)
  } 
  return (
    
    <div className="App">

          <Router>
            <Routes>
              
            <Route path="/" exact element={<Home />} />
            <Route path="/contact" element={<Contact />} />

            </Routes>
          </Router>
    
    </div>
  );
}

export default App;
