import { useTranslation } from 'react-i18next';
import { getImageUrl } from 'src/app/utils';

/**
 * PopupDiscover component displays a popup for discovering features.
 * @param {Object} props - The props object.
 * @param {boolean} props.isOpen - Indicates whether the popup is open.
 * @param {() => void} props.onClose - Function to be called when the popup is closed.
 * @param {string} props.title - The title of the popup.
 * @param {string} props.subTitle - The subtitle of the popup.
 * @param {() => void} [props.helpClick] - Function to be called when the help button is clicked.
 * @param {() => void} props.discoverClick - Function to be called when the discover button is clicked.
 * @returns {JSX.Element} - Returns the JSX for the PopupDiscover component.
 */
export default function PopupDiscover(props) {
	const { t } = useTranslation();
	return (
		<div className='grid grid-row-3 border border-constrained bg-white w-[420px] p-[12px]'>
			<div className='bg-sec-light rounded-md h-[131px] w-[396px] mb-5 flex justify-center items-center'>
				<img className='h-[29.92px] w-[43.39px]' src={getImageUrl('brand/cloud.svg')} alt='brand' />
			</div>
			<div className='mb-5'>
				<h3 className='text-sm font-semibold text-title'>{props.title}</h3>
				<p className='mt-2 text-sm text-subtitle'>{props.subTitle}</p>
			</div>
			<div className='flex items-end justify-end gap-4'>
				<button className='btn-sec' onClick={props.helpClick}>
					{t('Help center')}
				</button>
				<button className='btn-pri' onClick={props.discoverClick}>
					{t('Discover Now')}
				</button>
			</div>
		</div>
	);
}

/*

const [isPopupOpen, setIsPopupOpen] = useState(true);

const handleClose = () => {
	// Implement your logic for closing the popup
	setIsPopupOpen(false);
};

const handleHelpClick = () => {
	// Implement your logic for when the help button is clicked
};

const handleDiscoverClick = () => {
	// Implement your logic for when the discover button is clicked
};

<div className='App'>
<PopupDiscover
	isOpen={true} // Example: Pass your state or variable here
	onClose={handleClose}
	title='Welcome to Our App'
	subTitle='Explore the amazing features of our app.'
	helpClick={handleHelpClick}
	discoverClick={handleDiscoverClick}
/>
</div>
*/
