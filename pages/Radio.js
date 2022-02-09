import React from 'react';
import Link from 'next/link';

function Radio() {
	return (
		<div className="bg-indigo-900">
			<div className="text-[#FE7E6D] px-2 text-xl">
				<p>
					In the year 2017 CHIDO RUIDO was born when my best friend and I at
					UCSB wanted to flood the public airwaves at KCSB FM 91.9 with Latinx
					music. Being a Mexican American and a big follower of KCSB, I was
					always left with an empty feeling from the station only reaching one
					side of my culture, the American side. My best friend and I thought
					how cool and necessary it would be if we played the music we grew up
					with onto KCSB, and the rest is history.
				</p>
				<br />
				<p>
					You can tune in every Friday from 12-1pm on 91.9FM being your radio
					dial OR you can stream from ANYWHERE at kcsb.org.
				</p>
				<br />
				<p>Click the image below to start streaming!</p>
				<br />
				<p>Please Enjoy!</p>
				<br />
			</div>

			<a href="https://www.kcsb.org/">
				<img
					src="/radio.png"
					alt="radio"
					objectFit="contain" // change to suit your needs
					className="cursor-pointer"
				/>
			</a>
			<div className="flex flex-col align-center p-2 space-y-4">
				<img
					src="/r1.png"
					alt="radio"
					objectFit="contain" // change to suit your needs
					className="cursor-pointer"
				/>

				<img
					src="/r2.png"
					alt="radio"
					objectFit="contain" // change to suit your needs
					className="cursor-pointer"
				/>

				<img
					src="/r3.png"
					alt="radio"
					objectFit="contain" // change to suit your needs
					className="cursor-pointer"
				/>
			</div>

			<div className="flex flex-row justify-around text-[#FE7E6D]">
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

				<a href="/" className="underline">
					Home
				</a>
			</div>
		</div>
	);
}

export default Radio;
