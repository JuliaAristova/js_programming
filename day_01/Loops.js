for (let i = 0; i < 5; i++) {
  console.log("Hello JavaScript!");
}

for (let i = 1; i <= 10; i++) {
    if (i == 3) {
        console.log("   Skipping number 3");
        continue;} 
  console.log(i);
  if (i == 5) {
        console.log("   Breaking at number 5");
        break;
    }
}