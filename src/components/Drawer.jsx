import { useDisclosure } from '@mantine/hooks';
import { Drawer as MantineDrawer, Button } from '@mantine/core';

const Drawer = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <MantineDrawer opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </MantineDrawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}

export default Drawer;