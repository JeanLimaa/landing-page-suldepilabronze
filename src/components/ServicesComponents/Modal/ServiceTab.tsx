'use client'
import * as React from 'react';
import { useTab } from '@/hooks/useTab';
import ServicesTable from './Table/ServicesTable';
import TabsMain, { CustomTabPanel } from '@/components/TabMain';

export default function TabsService() {
    const {
        value,
        handleChange
    } = useTab();

    return (
            <TabsMain value={value} handleChange={handleChange}>
                <CustomTabPanel value={value} index={0} >
                    <ServicesTable bronze />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1} >
                    <ServicesTable depil />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2} >
                    <ServicesTable limpeza />
                </CustomTabPanel>
            </TabsMain>
    );
}
