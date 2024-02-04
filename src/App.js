import './App.css';
import CircleSelect from './components/circleSelect/circleSelect';
import MouseHoverComponent from './components/mouseHoverFolow/mouseHoverFolow';
import Card3D from './components/3dCard/3dCard';
import ItemCard from './components/ItemCard/ItemCard';
import RotatingMenu from './components/RotatingMenu/RotatingMenu';
import { useEffect, useState } from 'react';
import ItemList from './components/ItemList/ItemList';

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
  {
    text: "LOREM",
    color: "red",
    src: "https://picsum.photos/536/354"
  },
  {
    text: "LOREM",
    color: "red",
    src: "https://picsum.photos/id/870/536/354?grayscale&blur=2"
  },
]


function App() {

  const [rotatingPos, setRotatingPos] = useState(0)
  function ItemSelected(index) {
    setRotatingPos(index)
  }
  return (
    <div className="App">
      <RotatingMenu itemsData={data} position={rotatingPos}></RotatingMenu>
      <ItemList onItemSelect={ItemSelected} menuItemsData={data}></ItemList>

      <ItemCard></ItemCard>
      {/* <div className='spacer'></div>
      <div className='con'>
      <CircleSelect image={true} color={false} options={data}></CircleSelect>
      
      </div>
      <MouseHoverComponent>
      <div className='spacer'></div>
      <p>LOREM ipsu</p>
      </MouseHoverComponent>

            <Card3D>
        <img src='https://picsum.photos/id/1060/536/354?blur=2' ></img>
    </Card3D>
       */}
    </div>
  );
}

export default App;
