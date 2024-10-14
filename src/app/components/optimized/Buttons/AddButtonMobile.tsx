import { AddFillIconWhite } from 'src/app/utils/icons';
import { useNavigate } from 'react-router-dom';
interface Props {
	path?: string;
	onClick?: () => void;
}
export default function AddButtonMobile({ path, onClick }: Props) {
	const navigate = useNavigate();

	const handleClick = () => {
		if (path) {
			navigate(path);
		} else if (onClick) {
			onClick();
		}
	};

	return (
		<button
			onClick={handleClick}
			className={`flex justify-center  ite items-center size-12 rounded-full bg-primary `}
		>
			<AddFillIconWhite className='fill-white w-8 h-8' />
		</button>
	);
}

// Usage Example
// const { xs } = useResponsive();
// {xs && <AddButtonMobile onClick={} />}
// or
// {xs && <AddButtonMobile path='' />}
