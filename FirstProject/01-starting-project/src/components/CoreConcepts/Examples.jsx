
import TabButton from "../TabButton/TabButton";
import { EXAMPLES } from "../../data";
import { useState } from "react";
import Section from "./Section";
import Tabs from "../TabButton/Tabs";


export default function Examples() {

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
    <Section title="Examples" id='examples'>
      <Tabs 
        buttonsContainer='menu'
        buttons={<>
        <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
        <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
        <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
      </>}>
        {tabContent}
      </Tabs>
      {/* {!selectedTopic ? <p>Please select a topic</p> : <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>{EXAMPLES[selectedTopic].code}</pre>
          </div>} */}

    </Section>
  );
}