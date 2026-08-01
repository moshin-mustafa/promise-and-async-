JavaScript Promises & Async/Await Practice

Overview

This repository contains my hands-on practice while learning JavaScript Promises and async/await. The goal was to understand how asynchronous JavaScript works by solving progressively more challenging exercises instead of only reading theory.

Concepts Covered

Creating Promises

resolve() and reject()

Promise states (Pending, Fulfilled, Rejected)

.then() for handling successful results

.catch() for handling errors

Promise chaining

Returning values from .then()

Resolving objects with Promises

async / await

Error handling with try...catch

Exercises Completed

Level 1 – Basic Promises

Exercise 1 – First Promise

Task

Create a Promise that waits 2 seconds.

Resolve with "Task Completed".

Print the result using .then().

Concept Learned

Creating a Promise

Using setTimeout()

Handling resolved values with .then()

Exercise 2 – Reject a Promise

Task

Check an age variable.

Resolve "Welcome" if age is 18 or above.

Otherwise reject with "Access Denied".

Concept Learned

Conditional resolve/reject

Using .catch() for rejected Promises

Exercise 3 – Promise Returning an Object

TaskResolve this object:

{
  name: "Ali",
  age: 22
}

Print:

Ali
22

Concept Learned

Promises can resolve objects, arrays, strings, numbers, and more.

Accessing object properties inside .then().

Level 2 – Promise Chaining

Exercise 4 – Number Chain

Task

Start with:

Promise.resolve(5)

Transform the value through chaining to produce:

5
10
30
25

Concept Learned

Each .then() receives the value returned from the previous .then().

Avoid hardcoding values; transform the previous result.

Exercise 5 – String Chain

Task

Transform:

Hello

into:

Hello
Hello Mohsin
HELLO MOHSIN
HELLO MOHSIN!

using Promise chaining.

Concept Learned

Strings can be transformed step-by-step through chained .then() calls.

Each step should use the previous value.

Level 3 – Catch

Exercise 7 – Rejected Promise

TaskPredict the output of a rejected Promise handled with .catch().

Concept Learned

Rejected Promises skip .then().

.catch() receives the rejection reason.

Exercise 8 – Throwing Errors

TaskPredict the output when throw is used inside .then().

Concept Learned

throw inside .then() behaves like reject().

Execution skips remaining .then() blocks and jumps to .catch().

Level 4 – Async / Await

Exercise 9 – Convert Promise to async/await

TaskRewrite a Promise that resolves after 2 seconds using async and await.

Concept Learned

await pauses execution until the Promise resolves.

await replaces .then() for cleaner asynchronous code.

Exercise 10 – Delay with async/await

TaskWait 3 seconds, then print:

Loading...
Done

Concept Learned

await only works with Promises.

setTimeout() must be wrapped in a Promise before it can be awaited.

Exercise 11 – try...catch

TaskResolve "Pass" or reject "Fail" based on marks using async/await.

Concept Learned

Handle rejected Promises using try...catch.

try...catch is the async/await equivalent of .catch().

Key Takeaways

A Promise has three states:

Pending

Fulfilled

Rejected

resolve() sends execution to .then().

reject() sends execution to .catch().

Values returned from one .then() become the input of the next .then().

Promises can resolve any JavaScript value, including objects.

await only waits for Promises.

try...catch is used with async/await to handle errors.

Repository Purpose

This repository documents my learning journey with JavaScript asynchronous programming through practical exercises. It serves as a reference for understanding Promises, chaining, error handling, and async/await before moving on to advanced Promise methods such as:

Promise.all()

Promise.race()

Promise.any()

Promise.allSettled()
