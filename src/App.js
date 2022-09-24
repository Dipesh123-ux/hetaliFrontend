import Navbar from "./components/Navbar.jsx";
import AboutUs from "./components/aboutUs";
import Mission from './components/mission.jsx'
import Founder from './components/founder'
import Companies from './components/companies'
import Footer from './components/footer'

function App() {
  return (
    <>
      <div className="sticky top-0">
        <Navbar />
      </div>
      <div className="about">
        <AboutUs />
      </div>
      <div >
        <Mission />
      </div>
      <div>
        <Founder />
      </div>
      <div>
        <Companies/>
      </div>
      <div>
        <Footer/>
      </div>


    </>
  );
}

export default App;
