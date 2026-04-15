"use client";
import React from "react";
import styles from "./committeePg.module.css"; // Updated to use CSS modules
import Image from "next/image";
import { useRouter } from "next/navigation";

import loksabha from "../../public/images/loksabha.png";
import unesco from "../../public/images/unesco.jpg";
import uncsw from "../../public/images/uncsw.jpg";
import unga from "../../public/images/unga.jpg";
import unhrc from "../../public/images/unhrc.jpg";
import unsc from "../../public/images/unsc.jpg";
import ip from "../../public/images/IP.jpg";
import ccc from "../../public/images/CCC.webp";

const committees_ = [
    {
        name: "United Nations General Assembly",
        image: unga,
        agenda: "Examining the role of expanding military alliance in shaping global security, deterring conflicts, and escalating regional tensions",
        links: {
            bg: "https://drive.google.com/file/d/11nt-N0ojadhG7oVokPpt2V2LKs4JSmxe/view?usp=drive_link",
            lg: "https://chat.whatsapp.com/BCVEtg5A7k89dEPizYs081",
            eb: "https://drive.google.com/file/d/1SuV4JYRTjQMgQfrimOY9BZVxxOefjqNT/view?usp=drive_link",
            cm: "#",
        },
    },
    {
        name: "United Nations Human Rights Council",
        image: unhrc,
        agenda: "Assessing Modern Migration Challenges: State Policies on Immigrants in Compliance with International Human Rights Laws and Refugee Conventions",
        links: {
            bg: "https://drive.google.com/file/d/1i_P5J1wU5j0yNgWiMRwLs65yq8wgCc6t/view?usp=drive_link",
            lg: "https://chat.whatsapp.com/BCVEtg5A7k89dEPizYs081",
            eb: "https://drive.google.com/file/d/1U4Khd8QuprJwWfviKUEpGWEsxayB-aCF/view?usp=drive_link",
            cm: "#",
        },
    },
    {
        name: "United Nations Security Council",
        image: unsc,
        agenda: "Evaluating the Effectiveness of International Treaties in Preventing the Proliferation of Weapons of Mass Destruction and Threat of Non-State Actors.",
        links: {
            bg: "https://drive.google.com/file/d/1NI1zJ0LPLSecuMMSXQM1DEkiDmB2NwZu/view?usp=sharing",
            lg: "https://chat.whatsapp.com/BCVEtg5A7k89dEPizYs081",
            eb: "https://drive.google.com/file/d/1nlbW4AqrzBMNt-Gq6JPz15ESngUODWP_/view?usp=drive_link",
            cm: "#",
        },
    },
    {
        name: "Lok Sabha",
        image: loksabha,
        agenda: "Discussion on the Broadcast Bill and its Impact on Freedom of Expression and the Evolution of Modern Media",
        links: {
            bg: "https://drive.google.com/file/d/10kezbapN30hnGyey1wB_U4GcD7kXlpMD/view?usp=drive_link",
            lg: "https://chat.whatsapp.com/BCVEtg5A7k89dEPizYs081",
            eb: "https://drive.google.com/file/d/1Q0_KhhxBbbSpY85bERzfdbmxAVgk7Tpo/view?usp=drive_link",
            cm: "#",
        },
    },
    {
        name: "United Nations Commission on the Status of Women",
        image: uncsw,
        agenda: "Empowering Women by Strengthening Economic Resilience, Transforming Social Norms, and Promoting Inclusive Financing",
        links: {
            bg: "https://drive.google.com/file/d/1S0Yl6P-v2cZU4dUrEmWM0b1QPC3h-NlF/view?usp=drive_link",
            lg: "https://chat.whatsapp.com/BCVEtg5A7k89dEPizYs081",
            eb: "https://drive.google.com/file/d/1gYHdBmTS5AS7S78COlOLFNXI3kQHS1jh/view?usp=drive_link",
            cm: "#",
        },
    },
    {
        name: "Continuous Crisis Committee",
        image: ccc,
        agenda: "Neo-colonisation: Navigating through Global Instability",
        links: {
            bg: "https://docs.google.com/document/d/1Hyd4tNfaQnAaOMfRNAhV-89BA7vLokWKNk7dCf7LCvM/edit?usp=sharing",
            lg: "https://chat.whatsapp.com/BCVEtg5A7k89dEPizYs081",
            eb: "https://drive.google.com/file/d/128AyLLZsF69lq8q6leDrSC_4nc11P7Bu/view?usp=drive_link",
            cm: "#",
        },
    },
    {
        name: "United Nations Educational, Scientific and Cultural Organization",
        image: unesco,
        agenda: "Deliberating Ethical Accountability in AI Governance: Sovereign Authority VS Transnational Corporations",
        links: {
            bg: "https://drive.google.com/file/d/16cRNTmMA-KArj8asdOcXbqmUgqV5Q4P5/view?usp=drive_link",
            lg: "https://chat.whatsapp.com/BCVEtg5A7k89dEPizYs081",
            eb: "https://drive.google.com/file/d/1AaZtN8ESePNINhgPq1xeDI_OQsTklRHf/view?usp=drive_link",
            cm: "#",
        },
    },
    {
        name: "International Press",
        image: ip,
        agenda: "Journalists, Caricaturists, and Photographers.",
        links: {
            bg: "https://drive.google.com/file/d/1FgZx4294HRSrCBxdmwFvXgJy-pQ_EQ8g/view?usp=drive_link",
            eb: "https://drive.google.com/file/d/1h1Or-QSNBjfAkJzOB2rmMtrLHRm-4Zd4/view?usp=drive_link",
        },
    },
];

export const Committees = () => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.imageandheading}>
                <h1 className={styles.heading}>COMMITTEES</h1>
            </div>
            <div className={styles.committeesHolder}>
                {committees_.map((committee, index) => (
                    <div className={styles.committee} key={index}>
                        <Image className={styles.committeeImage} src={committee.image} alt={committee.name} width={500} height={300} />
                        <div className={styles.infoContainer}>
                            <h2 className={styles.committeeName}>{committee.name}</h2>
                            {committee.agenda && (
                                <>
                                    <h3 className={styles.agendaHeading}>Agenda:</h3>
                                    <p className={styles.agendaText}>{committee.agenda}</p>
                                </>
                            )}
                            <div className={styles.buttonsparent}>
                                {committee.name === "International Press" ? (
                                    <div className={styles.buttons}>
                                        <a className={styles.ebButton} href={committee.links.bg} target="_blank" rel="noopener noreferrer">Background Guide</a>
                                        <a className={styles.ebButton} href={committee.links.eb} target="_blank" rel="noopener noreferrer">Executive Board</a>
                                    </div>
                                ) : (
                                    <>
                                        <div className={styles.buttons}>
                                            <a
                                                className={styles.ebButton}
                                                href={committee.links.bg}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {committee.name === "Continuous Crisis Committee" ? "Suggested Links" : "Background Guide"}
                                            </a>
                                            <a className={styles.ebButton} href={committee.links.lg} target="_blank" rel="noopener noreferrer">Lobbying Group</a>
                                        </div>
                                        <div className={styles.buttons}>
                                            <a className={styles.ebButton} href={committee.links.eb} target="_blank" rel="noopener noreferrer">Executive Board</a>
                                            <a className={styles.ebButton}>Country Matrix</a>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Committees;