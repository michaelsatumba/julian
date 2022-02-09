import React from 'react';
import Footer from '../components/Footer';
import VideoGallery from '../components/VideoGallery';

function Videography() {
	return (
		<div>
			<h1 className="text-4xl font-bold p-4">Real Estate Video Tours</h1>
			<VideoGallery />
			<Footer />
		</div>
	);
}

export default Videography;
