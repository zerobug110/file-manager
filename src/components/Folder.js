import "./folder.scss";
import { FolderIcon } from "../assets/icons/icons";

const Folder = ({ name, onClick }) => {
  return (
    <li className="folder" onDoubleClick={onClick}>
      <div classname="folder__icon">
        <FolderIcon/>
      </div>
      <span className="folder__icon-name">{name}</span>
    </li>
  );
};

export default Folder;
