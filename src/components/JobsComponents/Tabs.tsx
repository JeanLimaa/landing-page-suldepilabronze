'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Job } from './Job/Job';
import { JobContainer } from './Job/JobContainer';
import Pagination from '@mui/material/Pagination';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
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
                <Box sx={{ p: 3 }}>
                    <JobContainer>{children}</JobContainer>
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

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor='secondary' indicatorColor='secondary'>
                    <Tab label="Bronzeamento" {...a11yProps(0)} />
                    <Tab label="Depilação" {...a11yProps(1)} />
                    <Tab label="Limpeza de pele" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Job src="https://file.rendit.io/n/nq99GJLxMp8Fjyq00dQC.png">
                    Bronzeamento
                </Job>
                <Job src="https://file.rendit.io/n/nq99GJLxMp8Fjyq00dQC.png">
                    Bronzeamento
                </Job>
                <Job src="https://file.rendit.io/n/nq99GJLxMp8Fjyq00dQC.png">
                    Bronzeamento
                </Job>
                <Job src="https://file.rendit.io/n/nq99GJLxMp8Fjyq00dQC.png">
                    Bronzeamento
                </Job>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Job src="https://file.rendit.io/n/nq99GJLxMp8Fjyq00dQC.png">
                    Depilação
                </Job>
                <Job src="https://file.rendit.io/n/nq99GJLxMp8Fjyq00dQC.png">
                    Depilação
                </Job>
                <Job src="https://file.rendit.io/n/nq99GJLxMp8Fjyq00dQC.png">
                    Depilação
                </Job>
                <Job src="https://file.rendit.io/n/nq99GJLxMp8Fjyq00dQC.png">
                    Depilação
                </Job>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Job src="https://file.rendit.io/n/nq99GJLxMp8Fjyq00dQC.png">
                    Limpeza de pele
                </Job>
                <Job src="https://file.rendit.io/n/nq99GJLxMp8Fjyq00dQC.png">
                    Limpeza de pele
                </Job>
                <Job src="https://file.rendit.io/n/nq99GJLxMp8Fjyq00dQC.png">
                    Limpeza de pele
                </Job>
                <Job src="https://file.rendit.io/n/nq99GJLxMp8Fjyq00dQC.png">
                    Limpeza de pele
                </Job>
            </CustomTabPanel>
        </Box>
    );
}