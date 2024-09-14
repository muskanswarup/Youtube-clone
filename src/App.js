import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
  return (
    <div >
     {/* <h1 >Let's get started with youtube</h1> */}
     <Navbar  />
      <div className='flex mt-4'>
     <Sidebar />
      {/* <h1>Video should render here!</h1> */}
      <Feed/>
      </div>
    </div>
  );
}

export default App;
