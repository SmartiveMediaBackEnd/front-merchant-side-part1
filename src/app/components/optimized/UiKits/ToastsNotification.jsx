/**
 * @param {object} props - Props for the ToastsNotification component.
 * @param {JSX.Element} props.icon - The icon element to display in the notification.
 * @param {string} [props.backgroundColor] - The background color of the notification.
 * @param {React.ReactNode} [props.children] - Optional children to include in the notification.
 * @param {(JSX.Element|string)} [props.action] - The action to include in the notification. Can be JSX element or string.
 * @returns {React.ReactNode} Returns the JSX element for the ToastsNotification component.
 */
const ToastsNotification = ({ icon, children, backgroundColor, action }) => {
	return (
		<div
			className='custom_container px-4 py-2 rounded-md flex items-center justify-between'
			style={{ backgroundColor }}
		>
			<div className='flex items-center'>
				{icon && <div className='text-center text-gray-700'>{icon}</div>}
				<div className='mx-1'>{children}</div>
			</div>
			{action}
		</div>
	);
};

export default ToastsNotification;

/* 
<ToastsNotification
    icon={<JSX />} // JSX icon element
    message='This is a notification message.'
    backgroundColor='#F0F4F8'
    action={<button onClick={}>action</button>}
>
    <Button />
</ToastsNotification>;
*/
