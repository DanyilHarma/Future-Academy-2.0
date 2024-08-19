import { useLocation } from "react-router-dom"

const useIsAlternate = (alternatePaths) => {
    const location = useLocation();
    return alternatePaths.includes(location.pathname)
}

export default useIsAlternate;