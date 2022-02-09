import React from 'react';
import DesignsGallery from '../components/DesignsGallery';
import Footer from '../components/Footer';

function Designs() {
	return (
		<div>
			<div className="px-2 text-xl">
				<p>
					There is no greater evidence of weakness and inferiority than that of
					greed. The creative man gives much and desires little, while the
					bankrupt, decaying and diseased, needs every privilege and the world
					to succour him.
				</p>
				<br />
				<p>ALL designs are original and subject to copyright.</p>
			</div>
			<DesignsGallery />
			<Footer />
		</div>
	);
}

export default Designs;
