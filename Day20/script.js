function oddorEven(num = 0) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) resolve("Even Number");
    else reject("Odd Number");
  });
}
async function run(num = 0) {
  let result = 0;
  try {
    result = await oddorEven(num);
    console.log(result);
  } catch (error) {
    console.log("=>", error);
  }
}
run(9);
run(10);
run(110);

run(120);
