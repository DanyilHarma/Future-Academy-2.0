import classes from "./contacts.module.css"
import Breadcrumbs from "../../breadcrumb/breadcrumb";
import contactsData from "./contactsData.json"


const Contacts = () => {

    return (
        <>
            <div className="container">
                <Breadcrumbs />
            </div>
            <div className={`container ${classes.contactsContainer}`}>
                <h1>Контакты</h1>
                <div className={classes.contactsContent}>
                    <div className={classes.contacts}>
                        {contactsData.contacts.map((contact, index) => (
                            <div key={index} className={classes.contact}>
                                <img src={contact.imgSrc} alt="" />
                                <span className={contact.number}>{contact.contact}</span>
                            </div>
                        ))}
                        <div className={classes.society}>
                            {contactsData.society.map((soc, index) => (
                                <a key={index} href={soc.link}><img src={soc.imgSrc} alt="" /></a>
                            ))}
                        </div>
                        <a href={contactsData.dzhen.link}><img src={contactsData.dzhen.imgSrc} alt="" /></a>
                    </div>
                    <div className={classes.geo}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.8621703953418!2d29.14737854479373!3d47.26650127347533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9594e0e3f7d77%3A0xc9c37e76bfba8041!2z0KjQtdGA0LjRhC00!5e0!3m2!1sru!2s!4v1719238301338!5m2!1sru!2s"
                            width="882" height="400" style={{ border: "0" }} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts;