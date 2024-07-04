import classes from "./listNvigation.module.css"



const ListNav = (props) => {
    return (
        <div>
            <li data-link={props.src}>
                <a href="">
                    {props.imgSrc && <img src={props.imgSrc} alt={props.text} />}{props.text}
                </a>
            </li>
        </div>
    )
}

export default ListNav;