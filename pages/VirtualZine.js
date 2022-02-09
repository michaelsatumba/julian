import Image from 'next/image';
import React from 'react';
import Footer from '../components/Footer';

function VirtualZine() {
	return (
		<div>
			<div className="px-2 text-xl">
				<p>
					I created a <strong>virtual zine</strong> with the purpose of
					providing a quick and colorful summary of major immigration policies
					within the United States and Mexico while also simultaneously showing
					the cultural responses in accordance to the bills as an artistic
					backdrop. It starts with the first major policy, Bracero Program,
					which my Great Grandfather lived through, and ends with modern day
					policies given by the Trump administration. Being a 1st generation
					Mexican American has always made my relationship to the border
					extremely prevalent and hyperaware of its impact because many people I
					know and love have been affected by it.
				</p>
				<br />
				<p>
					I hope this mini booklet serves as a helpful guide for those who would
					like to know more about how politics and cultural art are closely
					linked together.
				</p>
				<br />
				<p>Click the title page to start reading!</p>

				<a href="https://issuu.com/julilook/docs/span157_final_draft_jenna_y_julian_-_print">
					<div className="h-96 w-screen relative">
						<Image
							src="/book.png"
							alt="radio"
							objectFit="contain" // change to suit your needs
							className="cursor-pointer mt-2"
							layout="fill"
						/>
					</div>
				</a>
			</div>

			<Footer />
		</div>
	);
}

export default VirtualZine;
