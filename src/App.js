import './App.css';
import CircleSelect from './components/circleSelect/circleSelect';

function App() {
  return (
    <div className="App">
      <div className='con'>
        <CircleSelect color={true} options={[{text: "OPREM", color: "red"}, {text: "SUNEM", color: "blue"}, {text: "MUNEM", color: "violet"}]}></CircleSelect>

      </div>
    </div>
  );
}

export default App;
