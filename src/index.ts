import fs from "node:fs";

const contents = fs.readFileSync('football.csv', {
      encoding: 'utf-8'
    })
  .split('\n');
console.log(contents[0]);



export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
