//async function getTodos() {
//  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
////const result = await response.json();
//console.log(result);
//}
//getTodos();

async function prom1(num = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 == 0) {
        resolve("EvenNumber");
      } else {
        reject("oddnumber");
      }
    }, 5000);
  });
}

async function result() {
  try {
    const response = await prom1(9);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
result();
