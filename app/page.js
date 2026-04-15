import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Committees from "@/components/Committees";
import Contact from "@/components/Contact";

export default function Home() {
	return (
		<div className={styles.container}>
			<Navbar />
			<Hero />
            <Countdown />
            <Committees />
            <Contact />
		</div>
	);
}
