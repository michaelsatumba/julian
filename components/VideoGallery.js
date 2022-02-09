import Image from 'next/image';
import React from 'react';

function VideoGallery() {
	return (
		<div>
			<div className="flex flex-wrap justify-evenly space-y-4 mb-10">
				<a href="https://www.youtube.com/watch?v=cNsUXF0OTl0">
					<Image
						width={200}
						height={185}
						src="/v1.png"
						alt="photography"
						className="object-none"
					/>
				</a>

				<a href="https://www.youtube.com/watch?v=kVNU6npeBTw">
					<Image
						width={200}
						height={150}
						src="/v2.png"
						alt="photography"
						className="object-none"
					/>
				</a>

				<a href="https://www.youtube.com/watch?v=IjEsx79gZNY">
					<Image
						width={200}
						height={150}
						src="/v3.png"
						alt="photography"
						className="object-none"
					/>
				</a>

				<a href="https://www.youtube.com/watch?v=UlcWr0_5KPU">
					<Image
						width={200}
						height={150}
						src="/v4.png"
						alt="photography"
						className="object-none"
					/>
				</a>

				<a href="https://www.youtube.com/watch?v=VrAUhd-Y5qs">
					<Image
						width={200}
						height={150}
						src="/v5.png"
						alt="photography"
						className="object-none"
					/>
				</a>

				<a href="https://www.youtube.com/watch?v=IEeMiVA6s2Y">
					<Image
						width={200}
						height={150}
						src="/v6.png"
						alt="photography"
						className="object-none"
					/>
				</a>

				<a href="https://www.youtube.com/watch?v=oXyJ1UpN8ac">
					<Image
						width={200}
						height={150}
						src="/v7.png"
						alt="photography"
						className="object-none"
					/>
				</a>
			</div>
		</div>
	);
}

export default VideoGallery;
