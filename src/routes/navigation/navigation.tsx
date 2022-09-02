import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';
import { useUserAuth } from '../../contexts/user.context';
import { Button, Skeleton } from '@mui/material';
import { Avatar } from '@mui/joy';
import { padding } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchange } from "@fortawesome/free-solid-svg-icons";
import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { faPaste } from '@fortawesome/free-solid-svg-icons';
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {user,logOut}:any = useUserAuth()
   const {email,displayName,photoURL} = user
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const  onHandleLogout =async()=>{
    try{
    await logOut()
    }
    catch(err:any){
   console.log(err)
    }
 
  }


  const drawer = (
    <div>
        <Box>
        <div style={{display:"flex",justifyContent:"center",padding:"10px",margin:"5px"}}>
        {/* <Skeleton variant="circular"  width={40} height={40} /> */}
        <Avatar
              alt={`${displayName}pic`}
              src={photoURL}
            />
        </div>
        <Typography component="span">
          {displayName}
          </Typography>
          <Typography  component="span">
           {email}
          </Typography>
        </Box>
      <Divider />
      <List>
      <ListItem disablePadding sx={{margin:"20px 0px",fontSize:"30px"}}>
            <ListItemButton>
              <ListItemIcon>
                <FontAwesomeIcon icon={faExchange} size="lg" />
              </ListItemIcon>
              <ListItemText primary={"Transactions"}    primaryTypographyProps={{fontSize: '18px'}} />
            </ListItemButton>
      </ListItem>
      <ListItem disablePadding  sx={{margin:"20px 0px",fontSize:"30px"}}>
            <ListItemButton>
              <ListItemIcon>
                <FontAwesomeIcon icon={faSitemap} size="lg" />
              </ListItemIcon>
              <ListItemText primary={"Categories"}   primaryTypographyProps={{fontSize: '18px'}}/>
            </ListItemButton>
      </ListItem>
      <ListItem disablePadding  sx={{margin:"20px 0px",fontSize:"30px"}}>
            <ListItemButton>
              <ListItemIcon>
                <FontAwesomeIcon icon={faPaste} size="lg" />
              </ListItemIcon>
              <ListItemText primary={"Reports"}   primaryTypographyProps={{fontSize: '18px'}}/>
            </ListItemButton>
      </ListItem>
     
      <ListItem disablePadding  sx={{margin:"20px 0px",fontSize:"30px"}}>
            <ListItemButton>
              <ListItemIcon>
                <FontAwesomeIcon icon={faCircleInfo} size="lg" />
              </ListItemIcon>
              <ListItemText primary={"Help"}   primaryTypographyProps={{fontSize: '18px'}}/>
            </ListItemButton>
      </ListItem>

       
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth + 15}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "aqua",
          backgroundImage: "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ display: "flex",justifyContent:"space-between",width:"100%"}}>
          <Box>Total: 0</Box>
          <Box><Button sx={{color:"black"}}onClick={onHandleLogout}>Logout</Button></Box>
          </Typography>
          
        </Toolbar>
        
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth + 25 ,   background: "linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)"},
          }}
          open
          
        >
            
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
      <Outlet/>
      </Box>
    </Box>
    
    </>
  );
}
