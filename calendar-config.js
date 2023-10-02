
function calcTable(year) {
    const arr = new Array(12).fill(null).map(() => new Array(6).fill(null).map(() => new Array(7).fill(null)));

    for (let month = 0; month < arr.length; month++) {
        const startDayInWeek = new Date(year, month, 1).getDay(); // Get the starting day of the month (0 = Sunday, 1 = Monday, etc.)
        const monthLong = new Date(year, month + 1, 0).getDate(); // Get the number of days in the month

        let row = 0;
        let col = startDayInWeek;

        for (let day = 1; day <= monthLong; day++) {
            arr[month][row][col] = day;
            col++;

            if (col === 7) {
                col = 0;
                row++;
            }
        }
    }
    return arr;
}

export default calcTable;
