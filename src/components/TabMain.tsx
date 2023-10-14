'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { ReactNode } from 'react';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 2 }} >
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
interface TabsMainProps {
    children: ReactNode,
    value: number,
    handleChange: (event: React.SyntheticEvent, newValue: number) => void
}
export default function TabsMain({children, value, handleChange}: TabsMainProps) {

    return (
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor='secondary' indicatorColor='secondary' >
                        <Tab label="Bronzeamento" {...a11yProps(0)} />
                        <Tab label="Depilação" {...a11yProps(1)} />
                        <Tab label="Limpeza de pele" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                {children}
            </Box>
    );
}
