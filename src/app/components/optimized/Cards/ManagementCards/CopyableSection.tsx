import { useState } from 'react';
import { CopyIcon } from 'src/app/utils/icons';

const CopyableSection = ({ content }) => {
	const [isCopied, setCopied] = useState(false);
	const [copiedContent, setCopiedContent] = useState('');

	const handleCopy = () => {
		setCopied(true);
		setCopiedContent(content);
		// You can add additional logic here when the content is copied.
	};

	return (
		<div className='flex px-4 pb-4 justify-between items-center'>
			<div>
				<h3 className='text-sm text-title'>Fan Al Taalouq</h3>
				<p className='text-sm text-subtitle'>FanAlTaalouq.dookan.net</p>
			</div>
			{isCopied ? (
				<div className='text-xs text-subtitle'>Copied</div>
			) : (
				<button onClick={() => handleCopy(content)}>
					<CopyIcon className='text-title' />
				</button>
			)}
		</div>
	);
};
export default CopyableSection;
