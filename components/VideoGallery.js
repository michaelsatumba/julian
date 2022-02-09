import React from 'react';

function VideoGallery() {
	return (
		<div>
			<div className="flex flex-wrap justify-evenly space-y-4 mb-10">
				<a href="https://www.youtube.com/watch?v=cNsUXF0OTl0">
					<img src="/v1.png" alt="photography" className="object-none py-4" />
				</a>

				<a href="https://www.youtube.com/watch?v=kVNU6npeBTw">
					<img src="/v2.png" alt="photography" className="object-none" />
				</a>

				<a href="https://www.youtube.com/watch?v=IjEsx79gZNY">
					<img src="/v3.png" alt="photography" className="object-none" />
				</a>

				<a href="https://www.youtube.com/watch?v=UlcWr0_5KPU">
					<img src="/v4.png" alt="photography" className="object-none" />
				</a>

				<a href="https://www.youtube.com/watch?v=VrAUhd-Y5qs">
					<img src="/v5.png" alt="photography" className="object-none" />
				</a>

				<a href="https://www.youtube.com/watch?v=IEeMiVA6s2Y">
					<img src="/v6.png" alt="photography" className="object-none" />
				</a>

				<a href="https://www.youtube.com/watch?v=oXyJ1UpN8ac">
					<img src="/v7.png" alt="photography" className="object-none" />
				</a>
			</div>
		</div>
	);
}

export default VideoGallery;
