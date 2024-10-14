import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { GoogleMap, useJsApiLoader, LoadScript, Marker } from '@react-google-maps/api';

import { useTranslation } from 'react-i18next';

interface map {
	center: {
		lat: string;
		lng: string;
	};
}
interface props {
	setDisablePickButton: (e: boolean) => void;
	setLocationEnabled: (e: boolean) => void;

	height: string;
}
const GoogleMapComponent = ({
	setDisablePickButton,
	setLocationEnabled,

	height,
}: props) => {
	//  hooks

	const { t } = useTranslation();

	const containerStyle = {
		width: '100%',
		height: height,
		

	};

	const options = useMemo(
		() => ({
			zoomControl: false,
			streetViewControl: false,
			mapTypeControl: false,
			fullscreenControl: false,
		}),
		[],
	);
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey:  '',
	});
	const [isMounted, setIsMounted] = useState(false);
	// const [openInfoWindow, setOpenInfoWindow] = useState(false);
	const [mapSetup, setMapSetup] = useState(false);

	const center = useMemo(
		() => ({
			lat: 31.22,
			lng: 31.22,
		}),
		[],
	);

	const [map, setMap] = useState<any>({});
	const [zoom, setZoom] = useState<number>(10);
	const [centerPosition, setCenterPosition] = useState(center);

	const onLoad = useCallback(function callback(map: any) {
		setZoom(12);
		setMap(map);
	}, []);

	useEffect(() => {
		if (map?.center && mapSetup && map?.center?.lat && map?.center?.lng) {
			setCenterPosition({
				lat: map?.center?.lat(),
				lng: map?.center?.lng(),
			});
		}

		setIsMounted(true);
	}, [map, mapSetup]);

	useEffect(() => {
		if (map?.center && map.center.lat && map.center.lng) {
			setIsMounted(true);
		}
	}, [map]);
	const onUnmount = useCallback(function callback() {
		setMap(null);
		// setMapSetup(false)
	}, []);

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={centerPosition}
			onLoad={onLoad}
			zoom={zoom}
			onUnmount={onUnmount}
			onMouseDown={() => {
				setMapSetup(true);
				setDisablePickButton(true);
			}}
			onMouseUp={() => {
				setMapSetup(false);
				setDisablePickButton(false);
				setLocationEnabled(true);

				setCenterPosition({
					lat: map.center.lat(),
					lng: map.center.lng(),
				});
			}}
			onZoomChanged={() => {
				// setMapSetup(true)
				if (map && map.center && map.center.lat && map.center.lng) {
					setLocationEnabled(true);

					setCenterPosition({
						lat: map.center.lat(),
						lng: map.center.lng(),
					});
				}
			}}
			options={options}
		></GoogleMap>
	) : (
		<div>waiting</div>
	);
};

export default GoogleMapComponent;
