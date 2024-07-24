import { useState } from "react";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import ProjectForm from "./components/ProjectForm";
import ProjectSidebar from "./components/udemy/ProjectSidebar";
import NewProject from "./components/udemy/NewProject";
import NoProjectSelected from "./components/udemy/NoProjectSelected";


function App() {

  // const [addProject, setAddProject] = useState(false)

  // const [list, setList] = useState([])

  // function createForm() {
  //   setAddProject(prev => !prev)
  // }

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,

      }
    })
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {

      const newProject = {
        ...projectData,
        id: Math.random()
      }

      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  console.log(projectState);

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }


  return (
    // <div className="flex container mx-auto mt-32">
    //   <Sidebar
    //     className='flex-auto w-32'
    //     handleCreate={createForm}
    //     list={list} 
    //     ></Sidebar>
    //   {addProject ? (<Form handleCreate={createForm} list={list} setList={setList}></Form>)
    //     : (<Content handleCreate={createForm} className='flex-auto w-64'></Content>)
    //   }
    // </div>
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
