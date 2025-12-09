// Leaderboard sorting functionality
document.addEventListener('DOMContentLoaded', function () {
    const table = document.querySelector('.leaderboard-table');
    if (!table) return;
    
    const thead = table.querySelector('thead');
    const tbody = document.getElementById('leaderboard-body');
    
    // Default sort: by Overall Accuracy (column 6), descending
    let sortConfig = {
        columnIndex: 6,
        direction: 'desc'
    };
    
    // Add click handlers to sortable headers
    const sortableHeaders = thead.querySelectorAll('.sortable-header');
    sortableHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const columnIndex = parseInt(header.getAttribute('data-column-index'));
            
            // Toggle direction if clicking same column
            if (sortConfig.columnIndex === columnIndex) {
                sortConfig.direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
            } else {
                sortConfig.columnIndex = columnIndex;
                sortConfig.direction = 'desc';
            }
            
            sortTable();
            updateSortIndicators();
        });
    });
    
    function sortTable() {
        const rows = Array.from(tbody.querySelectorAll('tr'));
        const columnIndex = sortConfig.columnIndex;
        const direction = sortConfig.direction;
        
        rows.sort((a, b) => {
            const aCell = a.children[columnIndex];
            const bCell = b.children[columnIndex];
            
            if (!aCell || !bCell) return 0;
            
            const aValue = parseFloat(aCell.textContent.trim()) || 0;
            const bValue = parseFloat(bCell.textContent.trim()) || 0;
            
            if (direction === 'asc') {
                return aValue - bValue;
            } else {
                return bValue - aValue;
            }
        });
        
        // Clear and re-append sorted rows
        tbody.innerHTML = '';
        rows.forEach(row => tbody.appendChild(row));
    }
    
    function updateSortIndicators() {
        sortableHeaders.forEach(header => {
            const indicator = header.querySelector('.sort-indicator');
            const columnIndex = parseInt(header.getAttribute('data-column-index'));
            
            if (columnIndex === sortConfig.columnIndex) {
                header.classList.add('active');
                indicator.textContent = sortConfig.direction === 'asc' ? '↑' : '↓';
            } else {
                header.classList.remove('active');
                indicator.textContent = '⇅';
            }
        });
    }
    
    // Initial sort and indicator update
    sortTable();
    updateSortIndicators();
});
