import { FileEvent, FileSelector } from "components/FileSelector"
import { Modal } from "components/Modal"
import { ModalPosition } from "components/Modal/styles"
import { EditingContext } from "contexts"
import { Persistance } from "lib"
import React, { useContext, useState } from "react"
import styled from "styled-components"

type Props = {}

const Wrapper = styled.div`
  background-color: #302929;
  position: absolute;
  top: 0;
  right: 0;
  padding: .5em;
  display: flex;
  flex-direction: column;
  z-index: 1000;
`

const Button = styled.button`
  background-color: #000000;
  color: red;
  padding: .5em;
  margin: .4em 0;
  border-radius: .5em;
  &:hover{
    background-color: #1f1f1f;
  }
  cursor: pointer;
`

const H1 = styled.div`
  background-color: #302929;
  color: red;
  margin-bottom: .5em;
`

const DebugModal = styled.div`
  height: 500px;
  width: 500px;
  background: lime;
`

// Don't export this. I made this to make this file less spaghetti
function useModals(position: ModalPosition , text = "MODAL"){
  const [open, setOpen] = useState(false)

  return {
    Modal: (
      <>
        {open && (
          <Modal position={position} closeMenu={() => setOpen(false)}>
            <DebugModal>
              {text}
            </DebugModal>
          </Modal>
        )}
      </>
    ),
    setOpen: () => setOpen(true),
  }
}

export const Debug: React.FC<Props> = ({}) => {
  const {setEditing, editing} = useContext(EditingContext)
  const handleToggleEdit =  () => setEditing(!editing)
  
  const {Modal: Modal1, setOpen: setOpen1} = useModals(ModalPosition.left, "Nothing really")
  const {Modal: Modal2, setOpen: setOpen2} = useModals(ModalPosition.center, "Add bookmark/group")
  const {Modal: Modal3, setOpen: setOpen3} = useModals(ModalPosition.right, "Settings")

  const [file, setFile] = useState<string|null>(null)
  function handleFileChanged(event:FileEvent) {
    if(event.error){
      // TODO handle error
    }
    event?.file && setFile(event.file)
  }

  const handleInjectConfig = (file:string) => {
    const json = JSON.parse(file)    
    Persistance("localstorage").save(json)
  }

  return (
    <Wrapper>
      <H1>Debug Tools</H1>
      <Button onClick={handleToggleEdit}>
        Toggle Edit Mode
      </Button>
      <div style={{display: "flex", justifyContent:"space-around"}}>
      <Button onClick={setOpen1}>
        Modal Left
      </Button>
      <Button onClick={setOpen2}>
        Modal Center
      </Button>
      <Button onClick={setOpen3}>
        Modal Right
      </Button>
      </div>
      <div>
        <FileSelector onFileChanged={handleFileChanged}/>
        <Button onClick={() => file && handleInjectConfig(file)}>
          Inject Uploaded Config
        </Button>
      </div>
      {Modal1}
      {Modal2}
      {Modal3}
    </Wrapper>
  )
}