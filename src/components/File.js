import { FileIcon } from "../assets/icons/icons";
import "./file.scss";

const File = ({ name }) => {
    return (
      <div className="file">
        <div className="file-icon">
          <FileIcon/>
        </div>
        <p>{name}</p>
      </div>
    );
  };
  
  export default File;
