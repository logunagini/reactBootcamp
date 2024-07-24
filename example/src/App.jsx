import { useState } from 'react';
// import reactLogo from './assets/react.svg';
import {TabButton} from './TabButton.jsx';
import {CORE_CONCEPTS} from './assets/darta.js';
// import Examples from './assets/darta.js';
import './App.css';

function CoreConcept(key)
{
  return ( <li>
      <img src = {key.image}/>
      <h2>{key.title}</h2>
      <p>{key.description}</p>
  </li>
);

}


function App() {
  const [select, setSelect] = useState("please click the button")
  function handleclick(selectedButton) {
 setSelect(selectedButton);
    console.log(select);

  }

  return (
    <>
      <div>
      <section id="core-concepts">
          <h2>Core Concepts</h2>
          {/* /* <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
          
          </ul> */ }
          <ul>

         {CORE_CONCEPTS.map((item) => (<CoreConcept{...item} />))}
          </ul>
        </section>
        <section>
          <menu>
          <TabButton onSelect={() => handleclick('bird')}>
              natures
            </TabButton>
            <TabButton onSelect={() => handleclick('bird_2')}>boat</TabButton>
            <TabButton onSelect={() => handleclick('bird_3')}>train</TabButton>
          </menu>
          {select}
        </section>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          the bird is number {select}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
