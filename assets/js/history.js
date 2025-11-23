// ==================== HISTORY ====================

// HISTORY: data 

const BORROWING_HISTORY = [
    {
        id: 1,
        cover: 'assets/imges/book1.png',
        title: "Gray's Anatomy for Students",
        borrowDate: "2025-09-01",
        status: "Returned",
        returnDate: "2025-09-15",
        fine: "LYD 0"
    },
    { 
        id: 2,
        title: "Cracking The Coding Interview",
        cover: 'assets/imges/book2.png',
        borrowDate: "2025-10-10",
        status: "Overdue",
        returnDate: "2025-10-20",
        fine: "LYD 12"
    },
    {
        id: 3,
        title: "Atomic Habits",
        cover: 'assets/imges/book3.png',
        borrowDate: "2025-11-05",
        status: "Borrowed",
        returnDate: "2025-11-20",
        fine: "LYD 0"
    },
    {
        id: 4,
        title: "Social Engineering: The Science of Human Hacking",
        cover: 'assets/imges/book4.png',
        borrowDate: "2025-08-20",
        status: "Returned",
        returnDate: "2025-09-02",
        fine: "LYD 0"
    }
];

// History : Functions

const tableBody = document.getElementById("table-body");
let expandedRowId = null;

const getStatusChip = (status) => {
    switch (status) {
        case "Returned": return "badge returned";
        case "Overdue": return "badge overdue";
        case "Borrowed": return "badge borrowed";
        default: return "badge";
    }
};

const renderTable = () => {
    tableBody.innerHTML = "";

    BORROWING_HISTORY.forEach(item => {
        // Main row
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>
                <div class="book-cell">
                    <img src="${item.cover}" alt="${item.title}" class="book-cover">
                    <span>${item.title}</span>
                </div>
            </td>
            <td>${item.borrowDate}</td>
            <td><span class="${getStatusChip(item.status)}">${item.status}</span></td>
            <td>
                <button class="details-btn" onclick="toggleRow(${item.id})">
                    ${expandedRowId === item.id ? "Hide Details" : "Show Details"}
                </button>
            </td>
        `;

        tableBody.appendChild(row);

        // Expanded details row
        if (expandedRowId === item.id) {
            const detailsRow = document.createElement("tr");
            detailsRow.classList.add("details-row");

            detailsRow.innerHTML = `
                <td colspan="4" style="padding: 16px;">
                    <p><strong>Expected Return Date:</strong> ${item.returnDate}</p>
                    <p><strong>Fine Accrued:</strong> ${item.fine}</p>
                </td>
            `;

            tableBody.appendChild(detailsRow);
        }
    });
};

const toggleRow = (id) => {
    expandedRowId = expandedRowId === id ? null : id;
    renderTable();
};

// Initial load
renderTable();



