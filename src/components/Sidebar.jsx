import { useDisclosure} from '@mantine/hooks';
import { Drawer, Button, useMatches } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import '../index.css';

const Sidebar = () => {
  const [opened, { open, close }] = useDisclosure(false);

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
        closeButtonProps={{
          icon: <IconX size={72} color='#64FFDA' strokes={1.5} />,
          size: 'xl'
        }}
      >
        {/* Drawer content */}
        <p>Sidebar content</p>
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </div>
  );
}

export default Sidebar;