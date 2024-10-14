import { MoreIcon } from 'src/app/utils/icons';

/**
 * @param {object} props - Props for the CategoryViews component
 * @param {string} props.imageUrl - The URL of the image for the category
 * @param {string} props.title - The title of the category
 * @param {string | undefined} props.description - The description of the category
 * @param {boolean | undefined} props.hasAction - Determines whether the category has an action button
 *
 * @description
 *
 * Usage Example:
 *
 * ```jsx
 *
 * import { CategoryViews } from "./CategoryViews";
 *
 * export default function MyComponent() {
 *   return (
 *     <CategoryViews
 *       imageUrl="/path/to/image.jpg"
 *       title="Category Title"
 *       description="Category Description"
 *       hasAction={true}
 *     />
 *   );
 * };
 * ```
 */
export default function CategoryViews(props) {
	// Determine the size class for the image based on whether description is present
	const imageSizeClass = props.description ? 'size-15' : 'size-11';

	return (
		<div className='flex items-center justify-between p-4 bg-white'>
			<div className='flex'>
				{/* Category Image */}
				<div className={`rounded-lg border ${imageSizeClass}`}>
					<img src={props.imageUrl} alt={props.title} className='object-cover size-full' />
				</div>
				{/* Category Title and Description */}
				<div className='flex flex-col justify-center gap-4 ms-1'>
					<h2 className='title'>{props.title}</h2>
					{props.description && <p className='paragraph text-subtitle'>{props.description}</p>}
				</div>
			</div>
			{/* Action Button */}
			{props.hasAction && (
				<button className='self-start'>
					<MoreIcon className='fill-subtitle' />
				</button>
			)}
		</div>
	);
}

// Default props
CategoryViews.defaultProps = {
	title: 'Category Title', // Default category title
};
