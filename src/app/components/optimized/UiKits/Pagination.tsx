import React from 'react';

interface PaginationProps {
	totalItems: number;
	itemsPerPage: number;
	currentPage: number;
	onPageChange: (page: number) => void;
	totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
	totalItems,
	itemsPerPage,
	currentPage,
	onPageChange,
	totalPages,
}) => {
	const handlePrevClick = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1);
		}
	};

	const handleNextClick = () => {
		if (currentPage < totalPages) {
			onPageChange(currentPage + 1);
		}
	};

	const handlePageClick = (page: number) => {
		onPageChange(page);
	};

	const renderPageNumbers = () => {
		const pageNumbers = [];
		const maxVisiblePages = 5;

		// Logic for pagination with ellipsis
		if (totalPages <= maxVisiblePages) {
			for (let i = 1; i <= totalPages; i++) {
				pageNumbers.push(renderPageNumber(i));
			}
		} else {
			if (currentPage <= maxVisiblePages - 2) {
				for (let i = 1; i <= maxVisiblePages - 1; i++) {
					pageNumbers.push(renderPageNumber(i));
				}
				pageNumbers.push(
					<li key='ellipsis-start' className='px-2 py-1 opacity-50'>
						...
					</li>,
				);
				pageNumbers.push(renderPageNumber(totalPages));
			} else if (currentPage >= totalPages - maxVisiblePages + 3) {
				pageNumbers.push(renderPageNumber(1));
				pageNumbers.push(
					<li key='ellipsis-end' className='px-2 py-1 opacity-50'>
						...
					</li>,
				);
				for (let i = totalPages - maxVisiblePages + 3; i <= totalPages; i++) {
					pageNumbers.push(renderPageNumber(i));
				}
			} else {
				pageNumbers.push(renderPageNumber(1));
				pageNumbers.push(
					<li key='ellipsis-start' className='px-2 py-1 opacity-50 cursor-not-allowed'>
						...
					</li>,
				);
				for (let i = currentPage - 1; i <= currentPage + 1; i++) {
					pageNumbers.push(renderPageNumber(i));
				}
				pageNumbers.push(
					<li key='ellipsis-end' className='px-2 py-1 opacity-50 bg-blue-500'>
						...
					</li>,
				);
				pageNumbers.push(renderPageNumber(totalPages));
			}
		}

		return pageNumbers;
	};

	const renderPageNumber = (pageNumber: number) => {
		return (
			<li
				key={pageNumber}
				className={`px-4 py-1 cursor-pointer ${
					currentPage === pageNumber ? 'bg-blue-500 text-white' : 'hover:bg-blue-200'
				} `}
				style={{
					backgroundColor: currentPage === pageNumber ? '#3B82F6' : '#fff',
				}}
				onClick={() => handlePageClick(pageNumber)}
			>
				{pageNumber}
			</li>
		);
	};

	return (
		<div className='flex justify-start mt-4 '>
			<ul className='flex bg-white rounded-lg divide-x divide-gray-200 border'>
				<li
					className={`px-3 py-2 cursor-pointer ${
						currentPage === 1 ? 'pointer-events-none' : 'cursor-not-allowed'
					}`}
					style={{
						backgroundColor: currentPage === 1 ? '#D9D9D9' : '#fff',
					}}
					onClick={handlePrevClick}
				>
					Prev
				</li>
				{renderPageNumbers()}
				<li
					className={`px-3 py-2 cursor-pointer ${
						currentPage === totalPages ? 'pointer-events-none' : 'cursor-not-allowed'
					}`}
					style={{
						backgroundColor: currentPage === totalPages ? '#D9D9D9' : '#fff',
					}}
					onClick={handleNextClick}
				>
					Next
				</li>
			</ul>
		</div>
	);
};

export default Pagination;
