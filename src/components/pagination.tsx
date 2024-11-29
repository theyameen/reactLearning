type IProps = {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ totalPages, currentPage, onPageChange }: IProps) {
    const renderPageButton = (pageNum: number) => (
        <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={`${currentPage === pageNum ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"} 
                px-4 py-2 rounded-md`}
        >
            {pageNum}
        </button>
    );

    const renderEllipsis = (key: string) => (
        <span key={key} className="px-2">
            ...
        </span>
    );

    return (
        <div className="flex justify-center items-center space-x-2">
            <button
                onClick={() => onPageChange(1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-md bg-gray-200 text-gray-500 disabled:opacity-50"
            >
                First
            </button>

            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-md bg-gray-200 text-gray-500 disabled:opacity-50"
            >
                Prev
            </button>

            {/* First page */}
            {renderPageButton(1)}

            {/* Left ellipsis and numbers */}
            {currentPage > 4 && renderEllipsis('start')}

            {/* Show 3 numbers before current page */}
            {Array.from({ length: 3 }, (_, i) => currentPage - (3 - i))
                .filter(num => num > 1 && num < currentPage)
                .map(num => renderPageButton(num))}

            {/* Current page (if not first or last) */}
            {currentPage > 1 && currentPage < totalPages && renderPageButton(currentPage)}

            {/* Show 3 numbers after current page */}
            {Array.from({ length: 3 }, (_, i) => currentPage + (i + 1))
                .filter(num => num < totalPages && num > currentPage)
                .map(num => renderPageButton(num))}

            {/* Right ellipsis */}
            {currentPage < totalPages - 3 && renderEllipsis('end')}

            {/* Last page */}
            {totalPages > 1 && renderPageButton(totalPages)}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-md bg-gray-200 text-gray-500 disabled:opacity-50"
            >
                Next
            </button>

            <button
                onClick={() => onPageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-md bg-gray-200 text-gray-500 disabled:opacity-50"
            >
                Last
            </button>
        </div>
    );
}