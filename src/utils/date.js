const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();

    const getDaySuffix = (day) => {
        if (day > 3 && day < 21) return 'th'; // covers 4th-20th
        switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
        }
    };

    return `${day}${getDaySuffix(day)} ${month} ${year}`;
};

export { formatDate };
