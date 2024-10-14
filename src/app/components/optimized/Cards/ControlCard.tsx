import { Button, ToggleSwitch } from 'src/app/components/optimized';
import { getImageUrl } from 'src/app/utils';
import { AddFillIcon, LinkIcon } from 'src/app/utils/icons';

interface Platform {
	id: number;
	imageUrl: string;
	platformName: string;
	description: string;
	activated: boolean;
}

interface ControlCardProps {
	platform: Platform;
	setOpendialog: (e: boolean) => void;
}

export default function ControlCard({ platform, setOpendialog }: ControlCardProps) {
	const { id, imageUrl, platformName, description, activated } = platform;

	return (
		<div className='cardDetails-sharedClass flex sm:flex-row flex-col gap-[.7rem] items-start justify-start p-5'>
			<div className='size-[60px] grid place-items-center min-w-[60px] rounded-lg border border-light-2 overflow-hidden p-3'>
				<img src={getImageUrl(imageUrl)} alt={platformName} className='object-cover w-full' />
			</div>
			<div className='flex-col-global justify-between gap-4'>
				<div className='flex-col-global gap-[.25rem] items-start'>
					<h3 className=' title'>{platformName}</h3>
					<Button variant='link' RightIcon={LinkIcon}>
						Learn More
					</Button>
					<p className='paragraph text-subtitle'>{description}</p>
				</div>
				<div>
					{activated ? (
						<div className='flex-row-global justify-between'>
							<div className='flex-row-global gap-[.3rem] font-[600]'>
								{<LinkIcon />}
								<p>Open setup</p>
							</div>
							<span>
								<ToggleSwitch
									checked
									handleToggle={function (): void {
										throw new Error('Function not implemented.');
									}}
								/>
							</span>
						</div>
					) : (
						<Button onClick={() => setOpendialog(true)} variant='tertiary' LeftIcon={AddFillIcon}>
							Add ID
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}
