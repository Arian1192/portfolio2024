import { useState, useEffect, useRef } from 'react';
import GLOBE from 'vanta/dist/vanta.globe.min';
import * as THREE from 'three';

export const Vanta = () => {
	const [vantaEffect, setVantaEffect] = useState(null);
	const vantaRef = useRef(null);

	useEffect(() => {
		// Adding try-catch for better error handling
		try {
			if (!vantaEffect) {
				// Wrap VANTA initialization in a variable for better debugging
				const effectInstance = GLOBE({
					el: vantaRef.current,
					THREE: THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 1.0,
					scaleMobile: 1.0,
					backgroundColor: 0x0,
					color: 0x855bb1,
					color2: 0xfafafa,
					backgroundAlpha: 0.0,
					vertexColors: true,
				});

				const positionAttribute = effectInstance.geometry.attributes.position;
				const positionArray = positionAttribute.array;

				console.log('Position Attribute Values:', positionArray);

				// Set the effect instance to state
				setVantaEffect(effectInstance);
			}
		} catch (error) {
			console.error('Error initializing Vanta effect:', error);
		}

		// Cleanup function
		return () => {
			if (vantaEffect) {
				// Destroy the effect on component unmount
				vantaEffect.destroy();
			}
		};
	}, [vantaEffect]);

	return (
		<div
			ref={vantaRef}
			className="absolute xs:hidden top-0 left-0 -z-10 w-full h-screen overflow-hidden"
		></div>
	);
};
