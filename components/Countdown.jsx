"use client";
import React from "react";
import styles from "../styles/Countdown.module.css";
import Image from "next/image";
import countdown from "../public/images/2.webp";
import { useState, useEffect } from "react";

const Countdown = () => {
	const [done, setDone] = useState(false);
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const target = new Date("5/22/2026 23:59:59");

		const interval = setInterval(() => {
			const now = new Date();
			const difference = target.getTime() - now.getTime();

			const d = Math.floor(difference / (1000 * 60 * 60 * 24));
			setDays(d);

			const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			setHours(h);

			const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			setMinutes(m);

			const s = Math.floor((difference % (1000 * 60)) / 1000);
			setSeconds(s);

			if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
				setDone(true);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.container}>
			<Image src={countdown} alt="countdown" className={styles.bg} />
            <h1>22 | 23 MAY</h1>
			<div className={styles.holder}>
				<div className={styles.num}>
					<div className={styles.numbers}>{days}</div>
					<div className={styles.text}>days</div>
				</div>
				<div className={styles.num}>
					<div className={styles.numbers}>{hours}</div>
					<div className={styles.text}>hours</div>
				</div>
				<div className={styles.num}>
					<div className={styles.numbers}>{minutes}</div>
					<div className={styles.text}>minutes</div>
				</div>
				<div className={styles.num}>
					<div className={styles.numbers}>{seconds}</div>
					<div className={styles.text}>seconds</div>
				</div>
			</div>
		</div>
	);
};

export default Countdown;
