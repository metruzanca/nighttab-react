import React, { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';

import { Debug, Group, LinkItem } from 'components';
import { editingContext } from 'contexts';
import { theme } from 'styles';

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

  const {editing} = useContext(editingContext)

  return (
    <>
      <DefaultStyles/>
      {process.env.NODE_ENV === 'development' && <Debug/>}
      <Group>
        <LinkItem editing={editing}/>
        <LinkItem editing={editing}/>
        <LinkItem editing={editing}/>
        <LinkItem editing={editing}/>
      </Group>
      <Group>
        <LinkItem editing={editing}/>
        <LinkItem editing={editing}/>
        <LinkItem editing={editing}/>
        <LinkItem editing={editing}/>
      </Group>
    </>
  );
}

export default App;
