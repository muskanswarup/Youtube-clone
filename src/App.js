import './App.css';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div >
     {/* <h1 >Let's get started with youtube</h1> */}
     <Navbar />
      <div className='flex'>
     <Sidebar/>
     <Feed/>
      {/* <TagList/> */}
      {/* <p>Video container</p> */}
      </div>
    </div>
  );
}

export default App;
