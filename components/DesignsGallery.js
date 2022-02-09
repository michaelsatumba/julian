import Image from 'next/image';
import React from 'react';

function DesignsGallery() {
	return (
		<div>
			<div className="flex flex-wrap justify-evenly space-y-4 mb-10">
				<Image
					width={200}
					height={200}
					src="/d1.png"
					alt="photography"
					className="object-none py-4"
				/>

				<Image
					width={200}
					height={200}
					src="/d2.png"
					alt="photography"
					className="object-none"
				/>

				<Image
					width={200}
					height={200}
					src="/d3.png"
					alt="photography"
					className="object-none"
				/>

				<Image
					width={200}
					height={200}
					src="/d4.png"
					alt="photography"
					className="object-none"
				/>

				<Image
					width={200}
					height={200}
					src="/d5.png"
					alt="photography"
					className="object-none"
				/>

				<Image
					width={200}
					height={200}
					src="/d6.png"
					alt="photography"
					className="object-none"
				/>

				<Image
					width={200}
					height={200}
					src="/d7.png"
					alt="photography"
					className="object-none"
				/>
			</div>
		</div>
	);
}

export default DesignsGallery;
