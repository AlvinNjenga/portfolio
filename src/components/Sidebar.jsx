import { useDisclosure} from '@mantine/hooks';
import { Drawer, Burger, useMatches } from '@mantine/core';
// import { IconX } from '@tabler/icons-react';
import '../index.css';
import { navLinks } from '../constants/links';

const Sidebar = () => {
  const [opened, { close, toggle }] = useDisclosure(false);

  const size = useMatches({
    base: '70%',
    xs: 'sm'
  })

  return (
    <div className="md:hidden">
      <Drawer
        position='right'
        opened={opened}
        onClose={close}
        overlayProps={{ opacity: 0.8, blur: 4 }}
        size={size}
        className='mr-4'
        hiddenFrom='md'
        closeButtonProps={{ hidden: true }}
        styles={{ 
          header: { display: 'none'},
          content: {
            display: 'flex'
          },
          // TODO: Remove this to a style class.
          body: { 
            marginTop: "100px",
            color: "#CCD6F6",
            display: "flex",
            flexDirection: "column",
            fontFamily: "DM Mono",
            width: "100%",
            justifyContent: "space-around"
          }
        }}
      >
        {navLinks(true, close)}
      </Drawer>

      <Burger
        color='#64FFDA'
        opened={opened}
        onClick={toggle}
        aria-label="Open navigation"
        size='lg'
        styles={{ root: { position: 'relative', zIndex: "10000" } }}
      />
    </div>
  );
}

export default Sidebar;