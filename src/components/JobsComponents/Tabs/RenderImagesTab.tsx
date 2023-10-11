import { useEffect } from 'react';
import { JobBox } from '../Job/JobBox';
import { CustomTabPanel } from './Tabs';
import { useTab } from '@/hooks/useTab';

interface Job {
    image: string;
    jobName: string;
}

interface RenderImagesTabProps {
    index: number,
    value: number,
    currentPage: number,
    currentCategoryUrls: () => Job[];
}

export const RenderImagesTab = ({ index, currentPage, currentCategoryUrls, value }: RenderImagesTabProps) => {
    const {
        itemsPerPage,
        setItemsPerPage,
    } = useTab();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1280) setItemsPerPage(3);
            else setItemsPerPage(4);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <CustomTabPanel value={value} index={index}>
            {currentCategoryUrls().slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((job, index) => (
                <JobBox key={index} src={job.image}>
                    {job.jobName}
                </JobBox>
            ))}
        </CustomTabPanel>
    )
}