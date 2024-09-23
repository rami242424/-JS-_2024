const mon = "mon";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek1 = mon + thu + fri + sat + sun;
const daysOfWeek2 = [mon, thu, fri, sat, sun];

const nonsense = [1, 2, "hello", true, null, false, undefined, ""];

console.log(daysOfWeek1); // monthufrisatsun
console.log(daysOfWeek2); // (5) ['mon', 'thu', 'fri', 'sat', 'sun']
console.log(nonsense);

