"use client";
import React from "react";
import styles from "../styles/Committees.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

import loksabha from "../public/images/loksabha.png";
import unesco from "../public/images/unesco.jpg";
import uncsw from "../public/images/uncsw.jpg";
import unga from "../public/images/unga.jpg";
import unhrc from "../public/images/unhrc.jpg";
import unsc from "../public/images/unsc.jpg";
import ip from "../public/images/IP.jpg";
import ccc from "../public/images/CCC.webp";

const committees_ = [
    {
        name: "United Nations General Assembly",
        image: unga,
        agenda: "Deliberation on the Impact of Prolonged Armed Conflicts and Energy Geopolitics on the Fragmentation of the Global Order and the Decline of Multilateral Cooperation.",
    },
    {
        name: "United Nations Human Rights Council",
        image: unhrc,
        agenda: "Assessing the impact of prolonged conflict in the MENA region on fundamental human rights, with emphasis on displacement, war crimes accountability, and humanitarian access.",
    },
    {
        name: "United Nations Security Council",
        image: unsc,
        agenda: "Deliberating upon the legitimacy and consequences of escalating use of pre-emptive military strikes, amid the alarming erosion of nuclear deterrence and the growing threat of tactical nuclear weapon deployment.",
    },
    {
        name: "Lok Sabha",
        image: loksabha,
        agenda: "Deliberation on the impact of the Iran-United States Conflict and the volatile geopolitical situation on Indian planning & economy",
    },
    
    {
        name: "United Nations Office on Drugs and Crimes",
        image: unesco,
        agenda: "Strengthening international mechanisms to combat drug trafficking and cryptocurrency-enabled money laundering, with emphasis on dark web markets and cross-border enforcement challenges.",
    },
    {
        name: "Continuous Crisis Committee",
        image: ccc,
        agenda: "CLASSIFIED",
    },
    {
        name: "IP",
        image: ip,
        agenda: "Journalists, Caricaturists and Photographers.",
    },
];

const Committees = () => {
    return (
        <div className={styles.container} id="committees">
            <h1 className={styles.heading}>COMMITTEES</h1>

            <div className={styles.committeesHolder}>
                {committees_.map((committee) => (
                    <Committee key={committee.name} committee={committee} />
                ))}
            </div>
        </div>
    );
};

const Committee = ({ committee }) => {
    const router = useRouter();

    const handleRedirect = () => {
        router.push(`/committees?name=${encodeURIComponent(committee.name)}`);
    };

    return (
        <div className={styles.committeeCard}>
            <button className={styles.committeeButton} onClick={handleRedirect}>
                <Image src={committee.image} alt={committee.name} />
            </button>
            <h1 className={styles.committeeName}>{committee.name}</h1>
            <div className={styles.infoContainer}>
                <p className={styles.agendaHeading}>Agenda:</p>
                <p className={styles.agendaText}>{committee.agenda}</p>
            </div>
        </div>
    );
};

export default Committees;
