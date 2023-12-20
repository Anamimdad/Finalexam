import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Assets/Components/CustomNavbar';
import Herosection from './Assets/Components/Herosection';
import Footer from './Assets/Components/Footer';
import Section from './Assets/Components/Section'; // Capitalize the component name
import Future from './Assets/Components/Future';
import CustomNavbar from './Assets/Components/Header';

function App() {
  return (
    <div>
      <CustomNavbar />
      <Herosection />
      <Section /> {/* Capitalize the component name */}
      <Future />  {/* Capitalize the component name */}
      <Footer />
    </div>
  );
}

export default App;
