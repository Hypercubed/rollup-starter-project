
export const test = {
  // await: 123,                 // works!
  // [`await`]: a => 2 * a,      // works!
  await: a => 2 * a,             // Error parsing [path]/utils.js: The keyword 'await' is reserved (8:18) in [path]/utils.js
  add: (n, m) => n + m
}
