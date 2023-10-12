'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { JobContainer } from '../Job/JobContainer';
import { RenderImagesTab } from './RenderImagesTab';
import Pagination from '@mui/material/Pagination';
import { useTab } from '@/hooks/useTab';

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

export default function TabsMain() {
    const { 
        currentCategoryUrls,
        pageCount,
        value,
        currentPage,
        handlePageChange,
        handleChange
    } = useTab();

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor='secondary' indicatorColor='secondary' >
                        <Tab label="Bronzeamento" {...a11yProps(0)} />
                        <Tab label="Depilação" {...a11yProps(1)} />
                        <Tab label="Limpeza de pele" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <RenderImagesTab currentPage={currentPage} index={0} value={value} currentCategoryUrls={currentCategoryUrls}   />
                <RenderImagesTab currentPage={currentPage} index={1} value={value} currentCategoryUrls={currentCategoryUrls}   />
                <RenderImagesTab currentPage={currentPage} index={2} value={value} currentCategoryUrls={currentCategoryUrls}   />
            </Box>
            <Pagination
                count={pageCount}
                page={currentPage}
                onChange={handlePageChange}
                variant="outlined" color="secondary"
            />
        </>
    );
}
