import { Link } from "react-router-dom";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import classes from "./breadcrumb.module.css"
import { useState } from "react";

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();

    return (
        <nav>
            <ol className={classes.breadcrumb}>
                {breadcrumbs.map((breadcrumb, index) => {
                    const isLast = index === breadcrumbs.length - 1;
                    return (
                        <li key={index} className={isLast ? `
                         ${classes.breadcrumbLastContent}` : classes.breadcrumbContent}>
                            {
                                isLast ? <span>{breadcrumb.name}</span> :
                                    <Link to={breadcrumb.path}>{breadcrumb.name}</Link>
                            }
                        </li>
                    )
                }
                )}
            </ol>
        </nav>
    )
}

export default Breadcrumbs;