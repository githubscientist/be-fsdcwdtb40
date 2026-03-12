# Backend Repository

This repository contains the backend code for our application. It is built using Node.js, Express, and MongoDB. The backend is responsible for handling API requests, managing the database, and implementing the business logic of the application.

Why ExpressJS over NodeJS?

With NodeJS, you can create a server and handle HTTP requests, but it requires more manual setup and coding to manage routing, middleware, and other common web application features. ExpressJS provides a higher-level abstraction that simplifies these tasks, allowing developers to focus on building the application rather than dealing with the underlying complexities of NodeJS.

NodeJS: As the application grows, managing the application will become more complex, and you may need to write a lot of boilerplate code to handle routing, middleware, and other common web application features.

Versioning:

1.0.0

- The first value (1) indicates a major release, which typically includes significant changes that may not be backward compatible.

- The second value (0) indicates a minor release, which includes new features and improvements that are backward compatible.

- The third value (0) indicates a patch release, which includes bug fixes and minor improvements that are backward compatible.

NodeJS Module Types:

1. Built-in Modules: These are modules that come with NodeJS and provide core functionality, such as file system operations, HTTP server creation, and more. Examples include `fs`, `http`, and `path`.

2. Third-Party Modules: These are modules that are created by the community and can be installed using npm (Node Package Manager). They provide additional functionality and can be easily integrated into your application. Examples include `express`, `mongoose`, and `nodemon`.

3. Custom Modules: These are modules that you create yourself to organize your code and functionality. You can create custom modules by exporting functions, objects, or classes from a JavaScript file and then importing them into other files as needed.

## fs module

- fs: file system module
- It provides an API for interacting with the file system, allowing you to read, write, and manipulate files and directories.

## asynchronous vs synchronous programming

- Asynchronous programming allows you to perform tasks without blocking the main thread, while synchronous programming blocks the main thread until a task is completed.

In asynchronous programming, you can use callbacks, promises, or async/await to handle the completion of the synchronous tasks.

## Event Loop

- The event loop is a fundamental part of NodeJS that allows it to handle asynchronous operations. It continuously checks for events and executes the corresponding callbacks when they are ready. This allows NodeJS to perform non-blocking I/O operations and handle multiple requests concurrently without blocking the main thread.

## Callstack

- The call stack is a data structure that keeps track of the function calls in a program. When a function is called, it is added to the call stack, and when it returns, it is removed from the stack.

## Promises

- Promises are a resulting object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide a cleaner and more manageable way to handle asynchronous code compared to callbacks.

## Async/Await

- Async/Await are used to write asynchronous code in a more synchronous and readable manner. The `async` keyword is used to declare a function as asynchronous, and the `await` keyword is used to wait for a promise to resolve before proceeding with the execution of the code.
