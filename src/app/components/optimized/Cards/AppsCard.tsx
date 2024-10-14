import { Link } from 'react-router-dom';
import Badge from '../UiKits/Badge';
import { AppData } from 'src/pages/AppsPage/_hook/useAppStore';

/**
 * Usage Example:
 * import AppsCard from "./AppsCard";
 *
 * function MyComponent() {
 *   return (
 *     <AppsCard
 *       imageUrl="/path/to/image.jpg"
 *       name="Telegram"
 *       description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
 *       status="available"
 *       url="/app/telegram"
 *     />
 *   );
 * };
 */

export default function AppsCard({ name, description, status, imageUrl, url }: AppData) {
	return (
		<Link to={url} className='flex gap-3 global-cards flex-row'>
			<div className='p-1 size-[60px] cardDetails-sharedClass overflow-hidden'>
				<img src={imageUrl} className='w-full h-full' />
			</div>
			<div className='flex-col-global gap-[.50rem]'>
				<div className='flex-col-global gap-[.25rem]'>
					<h3 className='title'>{name}</h3>
					<p className='paragraph text-subtitle'>{description}</p>
				</div>
				<Badge status={status} />
			</div>
		</Link>
	);
}
