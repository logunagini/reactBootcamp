import { useState } from 'react';

import './App.css';

function App() {
const [matrix,setMatrix] = useState([
  ['x','o','o'],
  ['o','x','o'],
  ['o','o','x'],
])
function handleclick(r,c){
  tempMatrix=[...matrix];
  setMatrix(tempMatrix)
   
}
  return (
    <div className='app'>
      <div className="header alignCenter">Tic Tac Toe</div>

<div className='alignCenter board'>
  {matrix.map((row,rIndex)=>(
    <div className='row'>
      {row.map((cell,cIndex)=>(
        <div className='cell alignCenter'>
          {matrix[rIndex][cIndex]}</div>
      ))}
      </div>
  ))}
</div>
onClick = {()=>handleclick(rIndex,cIndex)};
    </div>
  );
}

export default App
