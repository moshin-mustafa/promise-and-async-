# JavaScript Promises & Async Programming Notes

## 📚 Overview

This repository contains my learning notes and practice exercises on JavaScript asynchronous programming. It starts from synchronous vs asynchronous execution and gradually builds up to Promises, Promise methods, the Event Loop, Microtasks, Macrotasks, and Promise Chaining.

---

# Table of Contents

1. Synchronous vs Asynchronous JavaScript
2. Why Asynchronous Programming?
3. What is a Promise?
4. Promise States
5. Creating a Promise
6. `resolve()` and `reject()`
7. `.then()`
8. `.catch()`
9. `.finally()`
10. Promise Execution Order
11. Microtasks vs Macrotasks
12. Promise Chaining
13. Returning Values from `.then()`
14. Returning Another Promise
15. Common Beginner Mistakes
16. Practice Exercises

---

# 1. Synchronous JavaScript

JavaScript executes code line by line.

```javascript
console.log("A");
console.log("B");
console.log("C");
```

Output

```
A
B
C
```

Execution only moves to the next line after the current one finishes.

---

# 2. Asynchronous JavaScript

Some operations take time.

Examples:

* `setTimeout()`
* `setInterval()`
* `fetch()`
* Reading files
* Database queries
* Network requests

Instead of blocking the program, JavaScript starts these operations and continues executing the remaining code.

Example:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Downloaded");
}, 3000);

console.log("End");
```

Output

```
Start
End
Downloaded
```

---

# 3. What is a Promise?

A Promise is an object that represents the eventual result of an asynchronous operation.

It promises that a value will become available in the future.

---

# 4. Promise States

A Promise has three states:

* **Pending** → Still waiting.
* **Fulfilled (Resolved)** → Completed successfully.
* **Rejected** → Failed.

Once a Promise becomes fulfilled or rejected, it is **settled** and cannot change again.

---

# 5. Creating a Promise

```javascript
let promise = new Promise((resolve, reject) => {

});
```

The function passed into `new Promise()` is called the **executor**.

It runs immediately when the Promise is created.

---

# 6. resolve() and reject()

## resolve()

Marks the Promise as fulfilled.

```javascript
resolve("Success");
```

## reject()

Marks the Promise as rejected.

```javascript
reject("Network Error");
```

Only the **first** call to `resolve()` or `reject()` has any effect.

---

# 7. .then()

`.then()` executes when a Promise is fulfilled.

```javascript
Promise.resolve("Hello")
.then((value) => {
    console.log(value);
});
```

Output

```
Hello
```

Important:

The callback inside `.then()` is a **microtask**.

It never runs immediately.

---

# 8. .catch()

`.catch()` executes when a Promise is rejected.

```javascript
Promise.reject("Wrong Password")
.catch((error) => {
    console.log(error);
});
```

Output

```
Wrong Password
```

---

# 9. .finally()

`.finally()` always executes after the Promise settles.

```javascript
Promise.resolve("Done")
.finally(() => {
    console.log("Cleanup");
});
```

Output

```
Cleanup
```

Use `.finally()` for cleanup work like:

* Hiding loading indicators
* Closing files
* Releasing resources
* Resetting UI

`.finally()` does **not** receive the resolved value or rejection reason.

---

# 10. Promise Execution Order

Promise callbacks never interrupt synchronous code.

Example:

```javascript
console.log("A");

Promise.resolve("Hello")
.then((x) => {
    console.log(x);
});

console.log("B");
```

Output

```
A
B
Hello
```

---

# 11. Microtasks vs Macrotasks

JavaScript follows this order:

1. Run all synchronous code.
2. Run all Promise callbacks (`.then()`, `.catch()`, `.finally()`).
3. Run macrotasks like `setTimeout()` and `setInterval()`.

Example:

```javascript
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");
```

Output

```
1
4
3
2
```

---

# 12. Promise Chaining

Instead of nesting Promises:

```javascript
login().then(() => {
    getUser().then(() => {
        getOrders().then(() => {

        });
    });
});
```

Chain them:

```javascript
login()
.then(getUser)
.then(getOrders)
.then(getPayment)
.then(completeOrder)
.catch(handleError);
```

This keeps code readable and maintainable.

---

# 13. Returning Values from `.then()`

Whatever is returned from one `.then()` becomes the input of the next.

```javascript
Promise.resolve(5)
.then((x) => {
    return x + 5;
})
.then((x) => {
    console.log(x);
});
```

Output

```
10
```

---

# 14. Returning Another Promise

When returning another Promise, JavaScript automatically waits for it before continuing.

```javascript
login()
.then((name) => {
    return getUser(name);
})
.then((user) => {
    console.log(user);
});
```

This is how asynchronous workflows are built.

---

# 15. Why Do We Return a Promise?

Consider:

```javascript
function getUser() {

    setTimeout(() => {

        return {
            name: "Mohsin"
        };

    }, 1000);

}
```

This does **not** work because the function finishes before `setTimeout()` executes.

The `return` only returns from the callback, not from `getUser()`.

Correct approach:

```javascript
function getUser() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                name: "Mohsin"
            });

        }, 1000);

    });

}
```

The function immediately returns a Promise.

The Promise stays **Pending** until `resolve()` is called.

---

# 16. Common Beginner Mistakes

### ❌ Forgetting to return a Promise

```javascript
.then((x) => {
    Promise.resolve(x + 5);
})
```

Next `.then()` receives:

```
undefined
```

Correct:

```javascript
.then((x) => {
    return Promise.resolve(x + 5);
})
```

---

### ❌ Thinking resolve() prints a value

```javascript
resolve("Hello");
```

`resolve()` stores the value inside the Promise.

It does **not** print anything.

Use `.then()` or `await` to access the value.

---

### ❌ Thinking `.then()` runs immediately

Even if the Promise is already resolved:

```javascript
Promise.resolve("Hello")
.then(console.log);

console.log("Done");
```

Output

```
Done
Hello
```

---

# Mental Model

Think of a Promise as a sealed box.

```
Promise
   │
   ▼
Future Value
```

Initially:

```
Promise (Pending)
```

Later:

```
Promise (Fulfilled)
        │
        ▼
      "Mohsin"
```

`.then()` opens the box when the value becomes available.

---

# Practice Exercises

## Exercise 1

Predict the output:

```javascript
console.log("One");

setTimeout(() => {
    console.log("Two");
}, 2000);

console.log("Three");
```

---

## Exercise 2

Predict the output:

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
```

---

## Exercise 3

Predict the output:

```javascript
Promise.resolve(10)
.then((x) => {
    return x + 5;
})
.then((x) => {
    console.log(x);
});
```

---

## Exercise 4

Predict the output:

```javascript
console.log("A");

Promise.resolve("Hello")
.then((value) => {
    console.log(value);
});

console.log("B");
```

---

## Exercise 5

Predict the output:

```javascript
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");
```

---

## Exercise 6

Predict the output:

```javascript
Promise.reject("Wrong Password")
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("Finished");
});
```

---

## Exercise 7

Predict the output:

```javascript
Promise.resolve("Hello")
.then((x) => {
    return x + " Mohsin";
})
.then((x) => {
    return x + "!";
})
.then((x) => {
    console.log(x);
});
```

---

## Exercise 8

Predict the output:

```javascript
Promise.resolve(10)
.then((x) => {
    Promise.resolve(x + 5);
})
.then((x) => {
    console.log(x);
});
```

---

# Key Takeaways

* JavaScript is single-threaded.
* Asynchronous tasks prevent blocking.
* Promises represent future values.
* `resolve()` fulfills a Promise.
* `reject()` rejects a Promise.
* `.then()` handles success.
* `.catch()` handles errors.
* `.finally()` runs regardless of success or failure.
* Promise callbacks are **microtasks**.
* Microtasks run before `setTimeout()`.
* Always return Promises when chaining asynchronous operations.
* Forgetting `return` breaks the Promise chain.

---

## 🚀 Next Topics

The next concepts to learn are:

* `async`
* `await`
* `try...catch`
* `Promise.all()`
* `Promise.allSettled()`
* `Promise.race()`
* `Promise.any()`
* Fetch API (`GET` & `POST`)
* Building real-world asynchronous applications
