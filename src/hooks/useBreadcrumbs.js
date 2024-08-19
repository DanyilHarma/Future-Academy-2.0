import { useLocation } from "react-router-dom"

const useBreadcrumbs = () => {
    const location = useLocation();

    const breadcrumbsName = {
        "": "Главная",
        "coursesAllPage": "Курсы"
    }

    const pathnames = location.pathname.split("/").filter(x => x);

    const breadcrumbs = pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const name = breadcrumbsName[value] || value;
        return { name, path: to }
    });
    return [{ name: "Главная", path: "/" }, ...breadcrumbs];
}

export default useBreadcrumbs;