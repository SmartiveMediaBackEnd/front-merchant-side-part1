import { useTranslation } from 'react-i18next';
interface CardHeaderProps {
	title: string;
	description?: string;
	className?: string;
}
export default function CardHeader({ title, description, className }: CardHeaderProps) {
	const { t } = useTranslation();
	return (
		<div className={className}>
			<h2 className='title mb-2'>{t(title)}</h2>
			{description && <p className='paragraph'>{t(description)}</p>}
		</div>
	);
}
