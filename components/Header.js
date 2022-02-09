import React from 'react';
import Link from 'next/link';

function Header() {
	return (
		<div className="flex flex-row justify-around">
			<h1>Made by Julian</h1>

			<Link href="/About">
				<a className="underline">About</a>
			</Link>

			<a href="https://linktr.ee/MadeByJulian" className="underline">
				Linktree
			</a>
		</div>
	);
}

export default Header;
