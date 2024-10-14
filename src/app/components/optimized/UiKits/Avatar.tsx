//! Usage:
// <Avatar
//   variant="user"
//   firstName="John"
//   lastName="Doe"
//   imageUrl="https://example.com/avatar.jpg"
//   size="sm"
// />

import { getImageUrl } from 'src/app/utils';

//! Props:
//? - variant: Specifies the type of avatar ('user' or 'group').
//? - firstName: The first name of the user (required for 'user' variant).
//? - lastName: The last name of the user (required for 'user' variant).
//? - imageUrl: The URL of the user's avatar image (optional for 'user' variant).
//? - groupCount: The count of users in a group (required for 'group' variant).
//? - size: The size of the avatar ('sm' or 'lg').

interface AvatarProps {
	groupCount?: number;
	variant?: 'user' | 'group';
	fullName?: string;
	firstName?: string;
	lastName?: string;
	imageUrl?: string;
	size?: 'sm' | 'lg';
}
export const getInitials = (fullName?: string, firstName?: string, lastName?: string): string => {
	if (fullName) {
		return fullName
			.split(' ')
			.map((name) => name.charAt(0))
			.join('');
	} else if (firstName && lastName) {
		return `${firstName.charAt(0)}${lastName.charAt(0)}`;
	}
	return '';
};
export default function Avatar({
	groupCount = 0,
	variant,
	firstName = '',
	lastName = '',
	fullName = '',
	imageUrl,
	size,
}: AvatarProps) {
	// Generate initials from the first and last name.
	// const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
	const initials = getInitials(fullName, firstName, lastName);

	// Determine the count display for group avatars.
	const count: string = groupCount! > 50 ? `+ ${groupCount}` : `${groupCount}`;

	// Define base styles for the avatar.
	const baseStyle: string = `flex items-center justify-center rounded-full border border-borders-lines overflow-hidden ${
		size === 'sm' ? `size-8` : `size-10`
	}`;

	// Render the user avatar component.
	const renderUserAvatar = () => (
		<div className={`bg-sec-light ${baseStyle}`}>
			{imageUrl ? (
				<img
					src={getImageUrl(imageUrl)}
					alt={`${firstName} ${lastName}`}
					className='w-full h-full'
				/>
			) : (
				<span className='font-semibold text-sec-pressed uppercase'>{initials}</span>
			)}
		</div>
	);

	// Render the group avatar component.
	const renderGroupAvatar = () => (
		<div className={`bg-light-2 ${baseStyle}`}>
			<span className='paragraph text-title'>{count}</span>
		</div>
	);

	// Conditionally render either user or group avatar based on variant.
	return variant === 'group' ? renderGroupAvatar() : renderUserAvatar();
}
