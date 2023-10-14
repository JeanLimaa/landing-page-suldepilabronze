'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { SocialMedia } from './SocialMedia';
import Image from 'next/image';

interface Props {
    window?: () => Window;
}

const drawerWidth = 260;
const navItems = ['Inicio', 'Sobre', 'Serviços', 'Trabalhos', 'Certificados'];

export default function DrawerAppBar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }} className='flex flex-col items-center'>
                <Image width={100} height={100} src="/logomarca_suely.png" alt="logo_marca" className='w-14' />
                SulDepilla&Bronze
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <a href={`#${item}`} key={item}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText>
                                    {item}
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </a>
                ))}
            </List>
            <Divider />
            <Box sx={{ margin: "0.4rem 0" }}>
                <Typography variant='overline' fontSize={'small'}>
                    Contatos
                </Typography>
                <Box className="flex justify-center gap-2" >
                    <SocialMedia names={true} />
                </Box>
            </Box>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" className='bg-[linear-gradient(93deg,_#cc186e_-7%,#8b1717_146%)]'>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            <div>
                                <a href="#Inicio" className='flex items-center gap-2 cursor-pointer'>
                                    <Image width={100} height={100} src="/logomarca_suely_branca.png" alt="logo_marca" className='w-10' />
                                    SulDepilla&Bronze
                                </a>
                            </div>
                        </Typography>
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3 }}>
            </Box>
        </Box>
    );
}