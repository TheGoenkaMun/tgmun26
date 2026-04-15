"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/images/logo.jpeg";
import styles from "../styles/Navbar.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const toggleMenu = () => {
		setOpen((prev) => !prev);
	};

	const menuVars = {
		initial: {
			scaleY: 0,
		},
		animate: {
			scaleY: 1,
			transition: {
				duration: 0.5,
				ease: [0.12, 0, 0.39, 0],
			},
		},
		exit: {
			scaleY: 0,
			transition: {
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	const linkVars = {
		initial: {
			y: "30vh",
			transition: {
				duration: 0.5,
			},
		},
		open: {
			y: 0,
			transition: {
				duration: 0.7,
			},
		},
	};

	return (
		<nav className={styles.navbar}>
			<Image src={logo} width={100} className={styles.logo} />
			<ul className={styles.list}>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<Link href="/Newsletter">Newsletter</Link>
				</li>
				<li>
					<a href="/committees">Committees</a>
				</li>
				<li>
					<Link href="/Secretariat">Secretariat</Link>
				</li> 
				<li>
					<a href="/#contact">Contact Us</a>
				</li>
				<li>
					<a href="https://axisbpayments.razorpay.com/gdgpsmun" target="_blank">Payment</a>
				</li>
				<li>
					<a href="https://linktr.ee/thegoenkamun" target="_blank" className={styles.register}>
						Register
					</a>
				</li>
			</ul>
			<div className={styles.menu} onClick={toggleMenu}>
				Menu
			</div>
			<AnimatePresence>
				{open && (
					<motion.div
						variants={menuVars}
						initial="initial"
						animate="animate"
						exit="exit"
						className={styles.mobileMenu}
					>
						<div className={styles.close} onClick={() => setOpen(false)}>
							Close
						</div>
						<ul className={styles.mobileList}>
							<div className={styles.overhidden}>
								<motion.li variants={linkVars} initial="initial" animate="open">
									<a href="/" onClick={() => setOpen(false)}>Home</a>
								</motion.li>
							</div>
							<div className={styles.overhidden}>
								<motion.li variants={linkVars} initial="initial" animate="open">
									<Link href="/Newsletter" onClick={() => setOpen(false)}>Newsletter</Link>
								</motion.li>
							</div>
							<div className={styles.overhidden}>
								<motion.li variants={linkVars} initial="initial" animate="open">
									<a href="/committees" onClick={() => setOpen(false)}>Committees</a>
								</motion.li>
							</div>
							<div className={styles.overhidden}>
								<motion.li variants={linkVars} initial="initial" animate="open">
									<Link href="/Secretariat" onClick={() => setOpen(false)}>Secretariat</Link>
								</motion.li>
							</div>
							<div className={styles.overhidden}>
								<motion.li variants={linkVars} initial="initial" animate="open">
									<a href="/#contact" onClick={() => setOpen(false)}>Contact Us</a>
								</motion.li>
							</div>
							<div className={styles.overhidden}>
								<motion.li variants={linkVars} initial="initial" animate="open">
									<Link href="https://axisbpayments.razorpay.com/gdgpsmun" onClick={() => setOpen(false)}>Payment</Link>
								</motion.li>
							</div>
							<div className={styles.overhidden}>
								<motion.li variants={linkVars} initial="initial" animate="open">
									<a href="https://linktr.ee/thegoenkamun" target="_blank" className={styles.mobileRegister} onClick={() => setOpen(false)}>
										Register
									</a>
								</motion.li>
							</div>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
