import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { IoNotificationsOutline } from "react-icons/io5";
import CloseIcon from '@mui/icons-material/Close'; 
import Notif from '../../assets/notification.png'
import './Notification.css';

export default function Notification() {
  const [state, setState] = React.useState({
    right: false,
  });
  const [hover, setHover] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const notificationMenu = [
    {
      title: 'Macbro объявляет о скидке 10% на продукцию iPhone 14',
      time: '3 часа назад'
    },
    {
      title: 'Macbro объявляет о скидке 10% на продукцию iPhone 14',
      time: '1 день назад'
    },
    {
      title: 'Macbro объявляет о скидке 10% на продукцию iPhone 14',
      time: '1 день назад'
    },
    {
      title: 'Macbro объявляет о скидке 10% на продукцию iPhone 14',
      time: '1 день назад'
    },
    {
      title: 'Macbro объявляет о скидке 10% на продукцию iPhone 14',
      time: '1 день назад'
    },
    {
      title: 'Macbro объявляет о скидке 10% на продукцию iPhone 14',
      time: '1 день назад'
    },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: 419 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
        <h2 className='h2-title'>Уведомления</h2>
        <CloseIcon onClick={toggleDrawer(anchor, false)} style={{ cursor: 'pointer' }} />
      </Box>
      <List>
        {notificationMenu.length === 0 ? (
              
              <div className='error'>
                <img src={Notif} alt="" />
                <p >На данный момент отсутствуют уведомления.</p>
              </div>
            ) : (
              <List>
                {notificationMenu.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <img src={Notif} alt="Notification" style={{ width: 64, height: 72 }} />
                        </ListItemIcon>
                        <ListItemText primary={item.title} secondary={item.time} />
                      </ListItemButton>
                    </ListItem>
                    {index < notificationMenu.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            )}
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IoNotificationsOutline
            onClick={toggleDrawer(anchor, true)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="nav-icon-notification"
            style={{
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
            }}
          />

          <Box
            className={`hover-modal ${hover ? 'show' : ''}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {notificationMenu.length === 0 ? (
            
              <div className='error'>
                <img src={Notif} alt="" />
                <p >На данный момент отсутствуют уведомления.</p>
              </div>
            ) : (
              <List>
                {notificationMenu.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <img src={Notif} alt="Notification" style={{ width: 32, height: 32 }} />
                        </ListItemIcon>
                        <ListItemText primary={item.title} secondary={item.time} />
                      </ListItemButton>
                    </ListItem>
                    {index < notificationMenu.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            )}
          </Box>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
