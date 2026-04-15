import React from "react";
import styles from "../styles/Contact.module.css";
import instagram from "../public/images/instagram.png";
import whatsapp from "../public/images/whatsapp.png";
import contact from "../public/images/contacts.png";
import Image from "next/image";

const Contact = () => {
    const links = [
        {
            title: "Event Coordinator",
            name: "Ms. Sonia Jagga",
            number: "+91 98685 58800"
        },
        {
            title: "MUN Coordinator",
            name: "Ms. Raka Bagchi",
            number: "+91 93127 94648"
        },
        {
            title: "MUN Coordinator",
            name: "Mr. Ravi Shankar Jha",
            number: "+91 70115 96390"
        },
        {
            title: "Secretary General",
            name: "Ms. Yashasvi Bakshi",
            number: "+91 98117 28550",
        },
        {
            title: "Director General",
            name: "Mr. Sanat Tripathi",
            number: "+91 82872 52257",
        },
        {
            title: "USG Conference Affairs",
            name: "Ms. Tanvi Pandey",
            number: "+91 81301 56559",
        },
        {
            title: "USG Delegate Affairs",
            name: "Mr. Aadit Batra",
            number: "+91 85273 10303",
        }
    ]
	return (
		<div className={styles.container} id="contact">
            <Image src={contact} className={styles.bg}/>
			<h1 className={styles.heading}>CONTACT US</h1>
            <div className={styles.links}>
                <a href="/" className={styles.email}>thegoenkamun@gdgoenka-gurgaon.com</a>
                {links.map((link) => (
                    <Link key={link.name} title={link.title} name={link.name} number={link.number} />
                ))}
                <div className={styles.socials}>
                    <a href="https://www.instagram.com/thegoenkamun48/" target="_blank" rel="noopener noreferrer">
                        <Image className={styles.instagram} src={instagram} alt="Instagram logo" />
                    </a>
                    <a href="https://chat.whatsapp.com/BCVEtg5A7k89dEPizYs081" target="_blank" rel="noopener noreferrer">
                        <Image className={styles.whatsapp} src={whatsapp} alt="WhatsApp logo" />
                    </a>
                </div>
            </div>
		</div>
	);
};

const Link = ({title, name, number}) => {
    return (
        <div className={styles.link}>
            <p className={styles.title}>{title} - {name}</p>
            <p className={styles.number}>{number}</p>
        </div>
    )
}

export default Contact;
