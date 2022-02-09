import React from 'react';
import Link from 'next/link';

function Footer() {
	return (
		<div className="flex flex-row justify-around">
			<h1>Oxnard, Calif.</h1>

			<a
				href="https://drive.google.com/file/d/1y3OarhgKG0G4RINoA6oUJZw7vbPt1y0O/view"
				className="underline"
			>
				Résumé
			</a>

			<Link href="/About">
				<a className="underline">About</a>
			</Link>

			<Link href="/" className="underline">
				Home
			</Link>
		</div>
	);
}

export default Footer;
