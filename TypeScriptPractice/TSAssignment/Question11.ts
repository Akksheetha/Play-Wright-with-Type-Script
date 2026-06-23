let r:number=5
let angle:number=60
const diameter=2*r;
const circumference=2*Math.PI*r;
const sectorArea=(angle/360)*Math.PI*r*r;
const arcLength=(angle/360) *2*Math.PI*r;
console.log("Radius:", r);
console.log("Diameter:", diameter);
console.log("Circumference:", circumference);
console.log("Sector Area: ", sectorArea);
console.log("Arc Length: ", arcLength);