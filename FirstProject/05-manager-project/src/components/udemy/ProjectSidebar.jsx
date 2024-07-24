import Button from "./Button";

export default function ProjectSidebar({ onStartAddProject, projects, onSelectProject, selectProjectId }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>
                    + Add project
                </Button>
            </div>
            <ul className="mt-8">
                {projects.map((item) => {

                    let cssClass = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
                    if (item.id === selectProjectId) {
                        cssClass+= ' bg-stone-800 text-stone-200'
                    } else {
                        cssClass+= ' text-stone-400'
                    }

                    return (
                        <li key={item.id}>
                            <button
                                className={cssClass}
                                onClick={() => onSelectProject(item.id)}
                            >{item.title}</button>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}