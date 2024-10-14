import { useTranslation } from 'react-i18next';

/**
 * LabelIcon component displays an icon with optional text.
 * @param {Object} props - The props object.
 * @param {string} props.text - The text to display next to the icon.
 * @param {JSX.Element|null} props.icon - The icon element to display.
 * @param {string} [props.textColor='#F3F7FF'] - The color of the text.
 * @param {string} [props.backgroundColor] - The background color of the component.
 * @returns {JSX.Element} React element representing the LabelIcon.
 */
const LabelIcon = ({ text, icon = null, textColor, backgroundColor }) => {
	const { t } = useTranslation();

	return (
		<div
			className={`flex items-center px-3 py-1 gap-[.3rem] rounded-full text-white `}
			style={{ backgroundColor }}
		>
			{icon && icon}
			{text && (
				<span className={` text-sm capitalize`} style={{ color: textColor }}>
					{t(text)}
				</span>
			)}
		</div>
	);
};

export default LabelIcon;
