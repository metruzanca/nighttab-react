import React from "react";
import { faBars, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faPen, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Why does this file exist?
// To make sure when e.g. editing, the same pencil is used everywhere.

export const Icons = {
  // Edit mode
  Edit: <FontAwesomeIcon icon={faPen}/>,
  // TODO I think this faTimes is the wrong one
  Delete: <FontAwesomeIcon icon={faTimes}/>,
  LeftArrow: <FontAwesomeIcon icon={faChevronLeft}/>,
  RightArrow: <FontAwesomeIcon icon={faChevronRight}/>,
  UpArrow: <FontAwesomeIcon icon={faChevronUp}/>,
  DownArrow: <FontAwesomeIcon icon={faChevronDown}/>,
  Drag: <FontAwesomeIcon icon={faBars}/>,
  // 
}