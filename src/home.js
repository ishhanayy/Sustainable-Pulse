import './App.css';
import Heading from './components/heading';
import Pic from './components/HeadPic';
import Greetings from './components/challange-welcome';
import Stories from './components/stories';
import Thanks from './components/Thanks';
import Love from './components/Love';

function Home() {
  return (
    <div className="App">
      <Heading />
      <Pic/>
      <Greetings/>
      <Stories/>
      <Thanks/>
      <Love/>
    </div>
  );
}

export default Home;
