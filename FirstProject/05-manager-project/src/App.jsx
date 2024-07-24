import { useState } from "react";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";


function App() {

 const [addProject, setAddProject] = useState(false)

 const [list, setList] = useState([])

  function createForm() {
    setAddProject(prev => !prev)
  }


  return (
    <div className="flex container mx-auto mt-32">
        <Sidebar handleCreate={createForm} list={list} className='flex-auto w-32'></Sidebar>

        {addProject ? (<Form handleCreate={createForm} list={list} setList={setList}></Form>)
        : (<Content handleCreate={createForm} className='flex-auto w-64'></Content>)
        }
    </div>
  );
}

export default App;
