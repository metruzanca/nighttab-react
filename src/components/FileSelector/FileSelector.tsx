import React from "react"
import { Input } from "./styles"

export interface FileEvent {
  file?: string
  error?: string
}

type Props = {
  onFileChanged: (event: FileEvent) => void
}

export const FileSelector: React.FC<Props> = ({onFileChanged}) => {

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    if(event?.target?.files){
      const file = event?.target?.files[0]
      const reader = new FileReader()
      reader.onload = (event) => {
        if(typeof event?.target?.result === "string"){
          onFileChanged({file: event?.target?.result})
        } else {
          onFileChanged({error: "Invalid file format"})
        }
      }  
      reader.readAsText(file)
    }
  }

  return (
    <Input type={"file"} onChange={onChange}/>
  )
}