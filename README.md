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



# JavaScript Async/Await Workflow Challenge

## 📌 Project Overview

This project demonstrates the use of **Promises**, **Async/Await**, and **asynchronous workflow management** in JavaScript.

The goal was to simulate a real-world application where multiple asynchronous operations must execute in a specific order. Each step waits for the previous one to complete before moving to the next.

---

## 🎯 Challenge

Build the following workflow:

```text
Start
   ↓
Login
   ↓
Get User
   ↓
Get Orders
   ↓
Payment
   ↓
Complete
```

Each step is asynchronous and returns a Promise.

---

## 🧠 Concepts Practiced

* Creating Promises
* Resolving and rejecting Promises
* Using `async` functions
* Using `await`
* Returning values from async functions
* Error handling with `try...catch`
* Sequential execution of asynchronous tasks
* Managing application flow from a single controller function

---

## ⚙️ Workflow

### 1. Login

* Simulates user authentication.
* Validates username and password.
* Resolves if credentials are correct.
* Rejects if credentials are invalid.

---

### 2. Get User

* Simulates fetching user information.
* Returns:

  * Username
  * User ID

---

### 3. Get Orders

* Simulates selecting an order.
* Returns:

  * Product name
  * Product price
* Rejects if an invalid product is selected.

---

### 4. Payment

* Simulates payment processing.
* Resolves when the correct amount is provided.
* Rejects when the payment amount is incorrect.

---

### 5. Complete

* Simulates the completion of the entire process.
* Returns a success message when every previous step has completed successfully.

---

## 📚 What I Learned

During this project I learned:

* How Promises work internally.
* The difference between `.then()` and `async/await`.
* Why `await` pauses execution until a Promise settles.
* How async functions automatically return Promises.
* How to return values from one async function.
* How to catch rejected Promises using `try...catch`.
* Why sequential tasks should be controlled by one main function.
* How to build a complete asynchronous workflow similar to real-world applications.

---

## 💡 Key Takeaway

The most important lesson from this project was understanding that the **main controller function** is responsible for managing the workflow.

Instead of individual functions deciding what should happen next, the main `start()` function waits for each asynchronous task to complete before calling the next one.

This creates a clean and predictable execution flow.

---

## 🛠 Technologies Used

* JavaScript (ES6+)
* Promises
* Async/Await
* try...catch
* setTimeout()

---

## 🚀 Future Improvements

Possible improvements for this project include:

* Better variable naming.
* Passing returned data between functions.
* Using objects instead of simple strings for login responses.
* Simulating real API requests using the Fetch API.
* Connecting the workflow to a backend server.
* Adding user input instead of hardcoded values.

---

## 📖 Learning Outcome

This project strengthened my understanding of asynchronous programming in JavaScript and demonstrated how multiple asynchronous operations can be executed in a controlled and readable sequence using **Promises** and **Async/Await**.

