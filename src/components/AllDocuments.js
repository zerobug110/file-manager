import { useState } from "react";
import File from "./File";
import Folder from "./Folder";
import "./All-documentsCopy.scss"


export default function AllDocumentsCopy () {
    const [currentPath, setCurrentPath] = useState([]);
  const staticData = [
  
    {
      type: "folder",
      name: "work files",
      contents: [
        {
          type: "folder",
          name: "Movies",
          contents: [
            { type: "file", name: "Zindagi Na Milegi Dobara" },
            { type: "file", name: "Krrish 3" },
            { type: "file", name: "Kal Ho Na Ho" },
            { type: "file", name: "Inception" }
          ]
        },
        {
          type: "folder",
          name: "Songs",
          contents: [
            { type: "file", name: "Justin Bieber - Anyone" },
            { type: "file", name: "Drake - Passionfruit" },
            { type: "file", name: "Justin Bieber - Stay" },
            {
              type: "folder",
              name: "Instrumental",
              contents: [
                {
                  type: "file",
                  name: "Airwaves"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type: "folder",
      name: "Documents",
      contents: [
        {
          type: "folder",
          name: "documents",
          contents: [
            { type: "file", name: "Admin folder" },
            { type: "file", name: "staffs" },
            { type: "file", name: "clients" },
            { type: "file", name: "records" }
          ]
        },
        {
          type: "folder",
          name: "Accounts",
          contents: [
            { type: "file", name: "banks transactions" },
            { type: "file", name: "cheque" },
            { type: "file", name: "deposites" },
            {
              type: "folder",
              name: "pending",
              contents: [
                {
                  type: "file",
                  name: "reference docs"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type: "folder",
      name: "scanned docs",
      contents: [
        {
          type: "folder",
          name: "documents",
          contents: [
            { type: "file", name: "water bills" },
            { type: "file", name: "electricity" },
            { type: "file", name: "clients" },
            { type: "file", name: "Inception" }
          ]
        },
        {
          type: "folder",
          name: "videos",
          contents: [
            { type: "file", name: "documentary" },
            { type: "file", name: "commission" },
            { type: "file", name: "audit" },
            {
              type: "folder",
              name: "finance",
              contents: [
                {
                  type: "file",
                  name: "gt bank"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type: "file",
      name: "transcript"
    },
    {
      type: "file",
      name: "results"
    },
    {
      type: "file",
      name: "resume"
    },
    {
      type: "file",
      name: "contract Ref"
    }
  ];

  const handleFolderClick = (folderName) => {
    setCurrentPath([...currentPath, folderName]);
  };

  const handleBreadcrumbClick = (index) => {
    setCurrentPath(currentPath.slice(0, index + 1));
  };

  const getCurrentFolder = () => {
    let currentFolder = staticData;
    for (const folderName of currentPath) {
      currentFolder = currentFolder.find(
        (item) => item.type === "folder" && item.name === folderName
      ).contents;
    }
    return currentFolder;
  };

  const handleBrowserBack = () => {
    setCurrentPath(currentPath.slice(0, -1));
  };
  
  return (
    <div  className="all-docs-copy">
      <nav className="breadcrumbs ">
          {currentPath.length > 0 && (
            <div className="back-root" onClick={handleBrowserBack}>Back</div>
          )}
          {currentPath.map((folderName, index) => (
            <span className="breadcrumbs__link" key={index} onClick={() => handleBreadcrumbClick(index)}>
              {folderName}
            </span>
          ))}
        </nav>

      <div className="all-docs-copy__list">
      {getCurrentFolder().map((item, index) =>
          item.type === "folder" ? (
            <Folder
              key={index}
              name={item.name}
              onClick={() => handleFolderClick(item.name)}
            />
          ) : (
            <File key={index} name={item.name} />
          )
        )}
      </div>

    </div>
  )
}