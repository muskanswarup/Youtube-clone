import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div >
     {/* <h1 >Let's get started with youtube</h1> */}
     <Navbar />
      <div className='flex'>
     <Sidebar/>
      <h1>Video should render here!</h1>
      </div>
    </div>
  );
}

export default App;
