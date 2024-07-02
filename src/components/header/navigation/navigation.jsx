import classes from "./navigation.module.css"

const Navigation = (props) => {
    return (
        <div className={classes.nav}>
            <ul className={classes.firstLi}>
                <li data-link="/main-landing/all-courses/index.html">
                    <a href="">
                        <img src="/images/header-top-images/Group 14.png" alt="" /> Все курсы
                    </a>
                </li>
                <li data-link="/main-landing/all-events/index.html">
                    <a href="">
                        Мероприятия
                    </a>
                </li>
                <li data-link="/main-landing/news/index.html">
                    <a href="">
                        Новости
                    </a>
                </li>
                <li data-link="">
                    <a href="">
                        Карьера
                    </a>
                </li>
            </ul>
            <ul className={classes.secondLi}>
                <div className={classes.cityPopup}>
                    <img src="/images/header-top-images/Group 830.png" alt="" style={{ marginRight: '8px', cursor: 'auto' }}
                        className={classes.geo} />
                    <li className={classes.cityMain}> Дубоссары</li>
                    <img src="/images/header-top-images/Vector 197.png" alt="" className={classes.cityPopup} />
                </div>
                <a href="tel:+37368432044">
                    <li>+37368432044</li>
                </a>
                <li data-link="/main-landing/form-header/index.html">
                    <a href="">
                        <img src="/images/header-top-images/Group 593.png" alt="" />Войти
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;