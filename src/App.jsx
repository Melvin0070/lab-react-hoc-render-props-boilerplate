import './App.css';
// import LikeImage from './components/LikeImage';
// import LikePost from './components/LikePost';
import LikeImagecopy from './components/LikeImagecopy';
import LikePostcopy from './components/LikePostcopy';
import RenderProps from './components/RenderProps';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        {/* <LikePost/>
        <LikeImage/> */}

{/* 
        <LikeImagecopy/>
        <LikePostcopy/> */}

        <RenderProps render={(count, handleCount)=><LikeImagecopy count = {count} handleCount={handleCount} />} />
        <RenderProps render={(count, handleCount)=><LikePostcopy count = {count} handleCount={handleCount} />} />
      </div>
    </div>
  );
}

export default App;
