import React, { useContext, useCallback, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { v4 as uuid } from 'uuid';

import { Debug, Group, Header, Menu } from 'components';
import { ConfigContext, EditingContext } from 'contexts';
import { theme } from 'styles';

import { Background, Layout, Link, LinkArea } from './styles';
import { Modal } from 'components/Modal';
import { ModalPosition } from 'components/Modal/styles';

const DefaultStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
  }
  /* Temporary dark mode*/
  body {
    background-color: black;
  }

  :root {
    font-size: ${theme.rootFontSize};
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    color: white;
  }
`


function App() {
  const {editing} = useContext(EditingContext)
  const {config} = useContext(ConfigContext)
  const [open, setOpen] = useState(false)
  console.log("Bookmarks", config?.bookmarks);

  return (
    <>
      <DefaultStyles/>      
      <Background/>
      <Layout>
        <Header config={config.state.header} setOpen={() => setOpen(true)}/>
        <Link>
          <LinkArea>
            {config && config.bookmarks.map(groupProps =>
              <Group key={uuid()} {...groupProps} editing={editing}/>
            )}
          </LinkArea>
        </Link>
      </Layout>
      {/*
        @ZombieFox Original nighttab kept Menu off screen.
        Conditionally rendering it will probably make NT load faster
        Will probably require some extra transition setup, but thats okay.
      */}
      {open && (
        <Modal closeMenu={() => setOpen(false)} position={ModalPosition.right}>
          <Menu/>
        </Modal>
      )}
    </>
  );
}

export default App;
