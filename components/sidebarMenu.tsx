import React, { useState } from 'react'
import {
  Button,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

type Props = {
  children: React.ReactNode
}

const SidebarMenu = ({ children }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button data-cy="menu" label="Open Menu"
        onClick={() => setOpen(true)} />

      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          onHide={() => setOpen(false)}
          vertical
          visible={open}
          width='thin'
          data-cy='menu-items'
        >
          <Menu.Item as='a'>
            Home
          </Menu.Item>
          <Menu.Item as='a'>
            About
          </Menu.Item>
          <Menu.Item as='a'>
            Contact
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  )
}

export default SidebarMenu