import { useState } from "react";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import ProjectForm from "./components/ProjectForm";
import ProjectSidebar from "./components/udemy/ProjectSidebar";
import NewProject from "./components/udemy/NewProject";
import NoProjectSelected from "./components/udemy/NoProjectSelected";
import SelectedProject from "./components/udemy/SelectedProject";


function App() {

  // const [addProject, setAddProject] = useState(false)

  // const [list, setList] = useState([])

  // function createForm() {
  //   setAddProject(prev => !prev)
  // }

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [], 
    tasks: [],
  })

  function handleAddTask(text) {
    setProjectState(prevState => {
      const taskId = Math.random();

      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      }

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    })
  }

  function handleDeleteTask(taskId) {
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== taskId)
      }
    })
  }

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
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleCancelAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })
  }

  function handleDeleteProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId) //trả về các project có projectId khác với project đc chọn (loại bỏ project đc lấy theo id để xóa)
      }
    })
  }
  console.log(projectState.tasks);

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId) //tìm projectId

  let content = <SelectedProject 
                    project={selectedProject} 
                    onDelete={handleDeleteProject} 
                    onAddTask={handleAddTask}
                    onDeleteTask={handleDeleteTask}
                    tasks={projectState.tasks}/>;


  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
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
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectProjectId={projectState.selectedProjectId}
         />
      {content}
    </main>
  );
}

export default App;
