import { BronzeUrls, DepilUrls, LimpezaUrls } from '../components/JobsComponents/Job/JobsDatabase';
import { SyntheticEvent, ChangeEvent, useEffect, useRef, useState } from 'react';

export const useTab = () => {
    const [itemsPerPage, setItemsPerPage] = useState(4);
     const [currentPage, setCurrentPage] = useState(1); 
    const [value, setValue] = useState(0); 
    const isMounted = useRef(true)

    const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setCurrentPage(1);
    };  

    const currentCategoryUrls = () => {
        switch (value) {
            case 0:
                return BronzeUrls;
            case 1:
                return DepilUrls;
            case 2:
                return LimpezaUrls;
            default:
                return [];
        }
    };
    useEffect(() => {
        // Componente está sendo montado
        isMounted.current = true;

        return () => {
            // Componente está sendo desmontado
            isMounted.current = false;
        };
    }, []);
    
    const currentCategoryLength = currentCategoryUrls().length;
    const pageCount = Math.ceil(currentCategoryLength / itemsPerPage);

    return {
        currentCategoryUrls,
        currentCategoryLength,
        pageCount,
        setItemsPerPage,
        handlePageChange,
        value, setValue,
        itemsPerPage,
        isMounted,
        currentPage, 
        setCurrentPage,
         handleChange
    }
}