import classes from "./eventsRow.module.css"

const EventsRow = (props) => {

    return (
        <div className={classes.eventsSections}>
            {props.rows.map((row, index) => (
                <div key={index} className={props.isSpecialyStyle ? `${classes.gradientContainer} bigBlock` : classes.gradientContainer}>
                    <div className={props.isSpecialyStyle ? `${classes.gradient} bigBlock` : classes.gradient}></div>
                    <div className={`${classes.event} 
                    ${props.isSpecialyStyle && row.imageBack && row.bigBlock ? classes.bigBlock : ''}
                    ${row.bigBlock ? classes.bigBlock : ""} 
                    ${row.imageBack ? classes.imageBackEvent : ''}`} style={{ backgroundColor: `${row.backgroundColor}` }}>
                        <div className={classes.eventContent} style={{ paddingLeft: `${row.bigBlock ? "43%" : ""}` }}>
                            <span className={classes.eventType}>{row.imageBack ? null : row.event}</span>
                            <div className={classes.eventTitle}>
                                {row.imageBack ? <div className={classes.imageBack}></div> : null}
                                {props.isSpecialyStyle ? null : <img src={row.imgSrc} alt={row.name} />}
                                <h3>{row.imageBack ? row.event : row.name}</h3>
                            </div>
                            <p >{row.text}</p>
                            <span className={classes.eventDate}>{row.date}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default EventsRow;

