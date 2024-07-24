
import Image from '../assets/no-projects.png'

export default function Content({handleCreate}) {


    return(
        <div className='flex flex-col mx-auto'>
            <img className='w-20' src={Image} alt="no-projects" />
            <h2>Select a project or get started with a new one</h2>
            <button onClick={handleCreate}>Create new project</button>
        </div>
    );
}