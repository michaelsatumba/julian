import React from 'react';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';

function Photography() {
	return (
		<div>
			<h1 className="text-5xl p-4">Photography</h1>
			<hr />
			<h1 className="text-2xl p-4">(All images subject to copyright.)</h1>
			<hr className="mb-4" />
			<Gallery />
			<Footer />
		</div>
	);
}

export default Photography;
