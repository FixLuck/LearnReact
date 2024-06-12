
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts/CoreConcepts.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { useState } from 'react';



function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectdButton) {
    // we need to know what button was clicked
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectdButton);
  }

  let tabContent = <p>Please select a topic.</p>
  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>{EXAMPLES[selectedTopic].code}</pre>
          </div>
    )
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              {...CORE_CONCEPTS[1]} //separator CORE_CONCEPTS
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />

          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {/* {!selectedTopic ? <p>Please select a topic</p> : <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>{EXAMPLES[selectedTopic].code}</pre>
          </div>} */}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
