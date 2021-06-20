import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { v4 as uuid } from 'uuid';

import { Group, Header, Menu } from 'components';

import { Background, Layout, Link, LinkArea } from './styles';
import { Modal } from 'components/Modal';
import { ModalPosition } from 'components/Modal/styles';
import { useSelector } from 'react-redux';
import { RootState } from 'store/ducks';
import { BookmarkGroup } from 'types';

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
    font-size: var(--theme-root-font-size);
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    color: white;
  }
`

function App() {
  // TODO create a defaultRootState type
  const editing = useSelector<any, boolean>(state => state.edit.editing)
  const bookmarks = useSelector<RootState, BookmarkGroup[]>(state => state.bookmarks)
  const [open, setOpen] = useState(false)

  return (
    <>
      <DefaultStyles/>      
      <Background/>
      <Layout>
        <Header
          // config={config.state.header}
          setOpen={() => setOpen(true)}
        />
        <Link>
          <LinkArea>
            {bookmarks.map(groupProps =>
              <Group key={uuid()} {...groupProps} editing={editing}/>
            )}
          </LinkArea>
        </Link>
      </Layout>
      {open && (
        <Modal closeMenu={() => setOpen(false)} position={ModalPosition.right}>
          <Menu/>
        </Modal>
      )}
    </>
  );
}

export default App;
