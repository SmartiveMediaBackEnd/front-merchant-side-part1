import { useState } from 'react';

/**
 * Modal component for displaying a modal dialog.
 * @param {Object} props - Props for the Modal component.
 * @param {string} props.buttonText - Text to display on the button that opens the modal.
 * @param {string} props.title - Title of the modal dialog.
 * @param {import('react').ReactNode} props.children - Content to be displayed within the modal.
 * @returns {JSX.Element} - Modal component JSX.
 */
export default function Modal(props) {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div className='relative'>
			<button className='px-4 py-2 text-white bg-blue-500 rounded' onClick={openModal}>
				{props.buttonText}
			</button>

			{isOpen && (
				<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
					<div className='p-8 bg-white rounded'>
						<h2 className='mb-4 text-xl'>{props.title}</h2>
						{props.children}
						<button className='px-4 py-2 text-white bg-red-500 rounded' onClick={closeModal}>
							Close Modal
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

/*
    <div className="App">
      <Modal
        buttonText="Open Modal"
        title="Welcome!"
      >
        <p>This is the content of the modal.</p>
        <p>You can put any React components or text here.</p>
      </Modal>
    </div>
*/
