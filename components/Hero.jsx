import React from "react";
import styles from "../styles/Hero.module.css";
import bg from "../public/images/BG.png";
import Image from "next/image";

const Hero = () => {
	return (
		<div className={styles.container}>
            <Image src={bg} alt="BG" className={styles.bg} unoptimized={true}/>
			<div className={styles.heading}>
                <h1>THE GOENKA MUN' 26</h1>
                <p>Designing Resonance for a Conscious Tommorow</p>
            </div>
		</div>
	);
};

export default Hero;
