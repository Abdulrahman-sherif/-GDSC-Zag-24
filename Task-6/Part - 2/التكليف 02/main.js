let start = 10;
let end = 0;
let stop = 3;

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

for (let i = start; i >= stop; i--) {
    if (i === start) {
        console.log(`${start}`);
    }
    if (i < start) {
        console.log(`${end}${i}`);
    }
}