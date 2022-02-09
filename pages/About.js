import React from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';

function About() {
	return (
		<div>
			{/* image */}
			<Image
				src="/smile.png"
				alt="smile"
				objectFit="contain" // change to suit your needs
				className=""
				width={550}
				height={800}
			/>
			{/* bio */}
			<div className="p-10">
				<h1 className="text-4xl p-2">My name is Julian</h1>
				<p className="p-2">
					Because of our infinite growing relationships and vast virtualization
					of computers, creating a website was in accordance to share with all
					you digitial travelers a little bit about myself. I graduated from the
					University of California Santa Barbara in the year 2020 with a BA in
					Sociology and a double minor in Spanish and Translations. I’m a people
					person and I am passionate about meeting new people and seeing how I
					can help them. The most important message that I learned from my
					academic journey was ‘It’s not about what you know, its WHO you know,
					and DO THEY KNOW YOU.’ Potentialities are there, and I hope this
					digital rememberance gives you a small taste that leaves you craving
					for more.
				</p>
			</div>

			{/* image */}
			<Image
				src="/sb.png"
				alt="sb"
				objectFit="contain" // change to suit your needs
				className=""
				width={725}
				height={425}
			/>
			{/* contact */}
			<div className="text-xl p-5">
				<p>
					Contact information and list of job experience can be found{' '}
					<span className="underline">
						<a href="https://drive.google.com/file/d/1y3OarhgKG0G4RINoA6oUJZw7vbPt1y0O/view">
							here.
						</a>
					</span>
				</p>
			</div>
			{/* footer */}
			<Footer />
		</div>
	);
}

export default About;
