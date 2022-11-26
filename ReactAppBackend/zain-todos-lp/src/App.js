import './App.css';
import Bgimg from "./img/bg.jpg";
import Sjimg1 from "./img/sjimg1.png";
import Sjimg2 from "./img/sjimg2.png";
import Sjimg3 from "./img/sjimg3.png";
import Navbar from "./component/Navbar.js";
import Footer from './component/Footer.js';
import About from './component/About.js';
import Download from './component/Download.js';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (

    <Router >
      <div className="App">
        <img className="bg-img" alt='Bgimg' src={Bgimg} />
        <img className="sjimg sjimg1" alt='Sjimg1' src={Sjimg1} />
        <img className="sjimg sjimg2" alt='Sjimg2' src={Sjimg2} />
        <img className="sjimg sjimg3" alt='Sjimg3' src={Sjimg3} />

        <Navbar />
        <div className='content'>
          <Switch>

            <Route path='/download'>
              <Download />
            </Route>

            <Route path='/'>
              <About />
            </Route>



          </Switch>
        </div>


        <Footer />
      </div>
    </Router>

  );
}

export default App;
