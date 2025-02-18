import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

const Sidebar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="md:hidden">
      <Drawer
        position='right'
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{ opacity: 0.8, blur: 4 }}
        size="sm"
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