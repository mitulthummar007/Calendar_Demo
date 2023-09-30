

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


// function calcTable(year) {
//     let arr = new Array(12);
//     for (let x = 0; x < arr.length; x++) {
//         arr[x] = new Array(6);
//     }
//     for (let x = 0; x < arr.length; x++) {
//         for (let y = 0; y < arr[x].length; y++) {
//             arr[x][y] = new Array(7);
//         }
//     }
//     for (let month = 0; month < arr.length; month++) {
//         let startDayInWeek = new Date(year, month, 0).getDay() + 1;
//         let monthLong = new Date(year, month + 1, 0).getDate() + 1;
//         let beforCount = 0;
//         let counter = 1;
//         let startCount = false;

//         for (let x = 0; x < arr[month].length; x++) {
//             for (let y = 0; y < arr[month][x].length; y++) {
//                 if (beforCount == startDayInWeek) {
//                     startCount = true;
//                 } else {
//                     beforCount++;
//                 }
//                 if (startCount == true) {

//                     arr[month][x][y] = counter;
//                     counter++;

//                 } else {
//                     arr[month][x][y] = "";
//                 }

//                 if (counter > monthLong) {
//                     arr[month][x][y] = "";

//                 }
//             }
//         }
//     }
//     return arr;
// }

// export default calcTable;
