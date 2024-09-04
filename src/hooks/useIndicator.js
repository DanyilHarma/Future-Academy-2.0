import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom";


export const useIndicator = (alternatePaths = []) => {
    const [indicatorPosition, setIndicatorPosition] = useState(0);
    const [indicatorVisible, setIndicatorVisible] = useState(false);
    const containerRef = useRef(null);
    const location = useLocation();

    const isCoursesPage = location.pathname === "/coursesAllPage";
    const isAlternatePage = alternatePaths.includes(location.pathname);

    useEffect(() => {
        if (containerRef.current && isAlternatePage) {
            const firstElement = containerRef.current.children[0]
            if (firstElement) {
                setIndicatorPosition(firstElement.offsetLeft)
            }
        }

    }, [isAlternatePage]);

    const handleChangeSection = (index) => {
        if (containerRef.current) {
            const selectedElement = containerRef.current.children[index]
            if (selectedElement) {
                setIndicatorPosition(selectedElement.offsetLeft)
                setIndicatorVisible(true)
            }
        }
    }

    return {
        indicatorPosition,
        indicatorVisible,
        containerRef,
        isCoursesPage,
        isAlternatePage,
        handleChangeSection,
    }
}