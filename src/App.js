import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TagList from './components/TagList';

function App() {
  return (
    <div >
     {/* <h1 >Let's get started with youtube</h1> */}
     <Navbar />
      <div className='flex'>
     <Sidebar/>
      <TagList/>
      {/* <p>Video container</p> */}
      </div>
    </div>
  );
}

export default App;
