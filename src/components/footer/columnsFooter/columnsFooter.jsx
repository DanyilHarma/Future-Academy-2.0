import { useSelector } from "react-redux"
import classes from "./columnsFooter.module.css"
import ChildrenColumn from "./childrenColumn/childrenColumn"

const ColumnsFooter = () => {



    const sectionFooter = useSelector(state => state.footer)

    const sections = [
        { title: "Дети", items: sectionFooter.children },
        { title: "Подросткам", items: sectionFooter.teenagers },
        { title: "Взрослым", items: sectionFooter.adults },
        { title: "Информация", items: sectionFooter.informations }
    ]

    return (
        <div className={classes.sectionsColFooter}>
            <div className={classes.lastsCol}>
                {sections.map((section, sectionIndex) => (
                    <div className={classes.li} key={sectionIndex}>
                        <h5>{section.title}</h5>
                        {section.items.map((item, index) => (
                            <ChildrenColumn key={index} label={item.label} link={item.link} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ColumnsFooter;