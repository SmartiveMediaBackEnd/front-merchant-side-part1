import React from 'react';

/**
 * InitialsAvatar component to generate an avatar from initials or an image.
 * @param {Object} props - Component props.
 * @param {string} props.firstName - The first name.
 * @param {string} props.lastName - The last name.
 * @param {string} [props.imageUrl] - The URL of the image to display.
 * @param {number} [props.size=40] - The size of the avatar in pixels (default is 40).
 * @param {React.CSSProperties?} [props.style] - Additional styles to apply to the avatar container.
 * @param {string} [props.randomColor] - The hexadecimal color code for the background (optional).
 * @returns {JSX.Element} An avatar component displaying the initials or image.
 */

const InitialsAvatar = ({ firstName, lastName, imageUrl, size = 40, style, randomColor }) => {
	// Get the initials from the first name and last name
	const initials = () => {
		return (
			<p className='text-sec'>
				{firstName.charAt(0) ?? ''}{lastName.charAt(0) ?? ''}
			</p>
		);
	};

	const avatarStyle = {
		width: `${size}px`,
		height: `${size}px`,
		backgroundColor: randomColor ? `#${randomColor}` : '#333',
		fontSize: `${size * 0.4}px`,
		...style,
	};

	return (
		<div
			className={`text-sec-pressed bg-sec-pressed bg-opacity-20 rounded-full size-12 flex items-center justify-center  text-lg uppercase`}
			style={avatarStyle}
		>
			{imageUrl ? (
				<img
					src={imageUrl}
					alt={`${firstName} ${lastName}`}
					className='w-full h-full rounded-[50%]'
				/>
			) : (
				initials()
			)}
		</div>
	);
};

export default InitialsAvatar;

// Example
// const randomColor = Math.floor(Math.random() * 16777215).toString(16);
// <InitialsAvatar firstName="Alice" lastName="Brown" size={40} randomColor={randomColor} />
// <InitialsAvatar firstName="Alice" lastName="Brown" size={40} imageUrl="https://example.com/avatar.jpg" />
