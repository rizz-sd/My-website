import '../App.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


export default function Sidebar_nav() {
    return (
      <Sidebar className='Sidebar_nav'>
        <Menu>
          <SubMenu className='Sidebar_menu' label="About Me">
            <div className='text'>
            <MenuItem to='/Projects'> Projects </MenuItem>
            <MenuItem to='/certs'> Certifications </MenuItem>
            </div>
          </SubMenu>
          <MenuItem className='Sidebar_menu'> My Aspiration </MenuItem>
        </Menu>
      </Sidebar>
    );
  }
  