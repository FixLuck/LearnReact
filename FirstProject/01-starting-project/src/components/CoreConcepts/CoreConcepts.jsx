
import './CoreConcepts.css'

export default function CoreConcept({image, title, description}) { //destructuring from props to image, title, description
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }