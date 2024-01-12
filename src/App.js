import './App.css';
import CircleSelect from './components/circleSelect/circleSelect';

function App() {
  return (
    <div className="App">
      <div className='con'>
        <CircleSelect options={[{text: "OPREM"}, {text: "SUNEM"}, {text: "MUNEM"}, {text: "CUKAM"}]}></CircleSelect>

      </div>
    </div>
  );
}

export default App;
