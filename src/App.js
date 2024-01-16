import './App.css';
import CircleSelect from './components/circleSelect/circleSelect';
import MouseHoverComponent from './components/mouseHoverFolow/mouseHoverFolow';

const data = [
  {
    text: "LOREM",
    color: "red",
    src: "https://picsum.photos/id/237/536/354"
  },
  {
    text: "LOREM",
    color: "blue",
    src: "https://picsum.photos/seed/picsum/536/354"
  },
  {
    text: "IPSUM",
    color: "violet",
    src: "https://picsum.photos/id/1084/536/354?grayscale"
  },
  {
    text: "IPSUM",
    color: "black",
    src: "https://picsum.photos/id/1060/536/354?blur=2"
  },
]

function App() {
  return (
    <div className="App">
      <div className='spacer'></div>
      <div className='con'>
        <CircleSelect image={true} color={false} options={data}></CircleSelect>

      </div>
      <MouseHoverComponent>
        <div className='spacer'></div>
        <p>LOREM ipsu</p>
      </MouseHoverComponent>
    </div>
  );
}

export default App;
