
import './App.css';
// import Button from './component/Button/button';
import BoxButton from './component/Button/buttonBox';
// import Box from './component/post';
import Nav from './component/nav/nav';
// import Post from './component/posts/post';
import PostBoxes from './component/posts/postBoxes';

function App() {
  return (
    <div>
    <Nav/>
    <div className='App' >
    <div><PostBoxes/></div>
      <div><BoxButton/></div>
      </div>
     
    </div>
  );
}

export default App;
