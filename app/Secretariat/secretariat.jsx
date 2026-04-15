import styles from "./secretariat.module.css";
import Image from "next/image";

const members = [
    { name: "Yashasvi Bakshi", role: "Secretary-General", img: "/images/Yashasvi.jpg" },
    { name: "Sanat Tripathi", role: "Director General", img: "/images/Sanat.jpg" },
    { name: "Aadit Batra", role: "USG Delegate Affairs", img: "/images/aadit.jpg" },
    { name: "Tanvi Pandey", role: "USG Conference Affairs", img: "/images/Tanvi.jpg" },
    { name: "Mehul Yadav", role: "USG Logistics", img: "/images/mehul.jpg" },
    { name: "Sadhya Kalra", role: "Head of IP", img: "/images/Sadhya2.jpg" },
    { name: "Shivesh Arora", role: "IT Head", img: "/images/Shivesh2.jpg" },
    { name: "Darsh Agarwal", role: "IT Head", img: "/images/Darsh.jpg" },
];

export default function Secretariat() {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {members.map((member, index) => (
                    <div key={index} className={styles.card}>
                        <Image width={150} height={150} className={styles.image} alt={member.name} src={member.img}/>
                        <h2 className={styles.name}>{member.name}</h2>
                        <p className={styles.role}>{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
