import React, { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { v4 as uuid } from 'uuid';

import { Debug, Group } from 'components';
import { ConfigContext, EditingContext } from 'contexts';
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
  const {editing} = useContext(EditingContext)
  const {config} = useContext(ConfigContext)
  console.log(config.bookmarks);
  
  return (
    <>
      <DefaultStyles/>
      {process.env.NODE_ENV === 'development' && <Debug/>}
      {config.bookmarks.map(groupProps =>
        <Group key={uuid()} {...groupProps} editing={editing}/>
      )}
    </>
  );
}

export default App;
