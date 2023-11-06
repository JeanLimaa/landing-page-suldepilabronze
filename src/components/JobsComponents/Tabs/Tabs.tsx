'use client'
import { RenderImagesTab } from './RenderImagesTab';
import Pagination from '@mui/material/Pagination';
import { useTab } from '@/hooks/useTab';
import TabsMain from '@/components/TabMain';

export default function JobsTab() {
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
            <TabsMain handleChange={handleChange} value={value}>
                <RenderImagesTab currentPage={currentPage} index={0} value={value} currentCategoryUrls={currentCategoryUrls} />
                <RenderImagesTab currentPage={currentPage} index={1} value={value} currentCategoryUrls={currentCategoryUrls} />
                <RenderImagesTab currentPage={currentPage} index={2} value={value} currentCategoryUrls={currentCategoryUrls} />
            </TabsMain>
            <Pagination
                count={pageCount}
                page={currentPage}
                onChange={handlePageChange}
                variant="outlined" color="secondary"
            />
        </>
    );
}
