import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Main() {
	return (
		<div className="flex flex-col">
			<Link href="/Photography">
				<Image
					src="/photography.png"
					alt="photography"
					objectFit="contain" // change to suit your needs
					className="cursor-pointer"
					width={725}
					height={425}
				/>
			</Link>

			<Link href="/Videography">
				<Image
					src="/videography.png"
					alt="videography"
					objectFit="contain" // change to suit your needs
					className="cursor-pointer"
					width={725}
					height={425}
				/>
			</Link>

			<Link href="/Radio">
				<Image
					src="/radio.png"
					alt="radio"
					objectFit="contain" // change to suit your needs
					className="cursor-pointer"
					width={725}
					height={425}
				/>
			</Link>

			<Link href="/Designs">
				<Image
					src="/designs.png"
					alt="designs"
					objectFit="contain" // change to suit your needs
					className="cursor-pointer"
					width={725}
					height={425}
				/>
			</Link>

			<Link href="/VirtualZine">
				<Image
					src="/virtualZine.png"
					alt="virtualZine"
					objectFit="contain" // change to suit your needs
					className="cursor-pointer"
					width={725}
					height={425}
				/>
			</Link>
		</div>
	);
}

export default Main;
