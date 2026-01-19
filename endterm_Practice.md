
---

# 🧠 ASYNCHRONOUS JAVASCRIPT – DETAILED PRACTICE SHEET 

---

## ✅ ASSIGNMENT 1: Email Delivery Service (Callback)

### Title

**Send Email Notification Using Callback**

### Problem Statement

You are building an email notification module for a web application.
Email delivery happens asynchronously because it depends on an external mail server.
Once the email is sent (or fails), the system must notify the calling function using a **callback pattern**.

This simulates older Node.js style APIs where callbacks are used instead of promises.

### Task / Requirements

* Function should accept:

  * `email` (string)
  * `callback(error, result)`
* Simulate async behavior using `setTimeout` (800 ms)
* If:

  * `email` is not a string
  * OR does not contain `"@"`
    → return error via callback
* On success, return an object `{ email, sent: true }`

### Code Stub

```js
function sendEmail(email, callback) {
  // TODO: Implement email sending logic
}
```

### Sample Input & Output

```js
sendEmail("user@example.com", console.log);
```

### Test Cases

```js
sendEmail("admin@mail.com", console.log);
sendEmail("", console.log);
sendEmail(123, console.log);
```

### Solution

```js
function sendEmail(email, callback) {
  setTimeout(() => {
    if (typeof email !== "string" || !email.includes("@")) {
      callback("Invalid email address");
      return;
    }
    callback(null, { email, sent: true });
  }, 800);
}
```

---

## ✅ ASSIGNMENT 2: Scheduled System Alert (setTimeout)

### Title

**Display System Alert After a Delay**

### Problem Statement

In monitoring systems, alerts are often triggered after a delay to avoid false positives.
You are implementing a utility that prints an alert message after a specified delay.

### Task / Requirements

* Inputs:

  * `message` (string)
  * `delayMs` (number)
* Convert delay to milliseconds if needed
* If delay is negative → log error
* Otherwise, print the message after delay

### Code Stub

```js
function scheduleAlert(message, delayMs) {
  // TODO
}
```

### Sample Input & Output

```js
scheduleAlert("High CPU Usage", 2000);
```

### Test Cases

```js
scheduleAlert("Memory Leak Detected", 1000);
scheduleAlert("Disk Full", 0);
scheduleAlert("Invalid Alert", -500);
```

### Solution

```js
function scheduleAlert(message, delayMs) {
  if (delayMs < 0) {
    console.error("Invalid delay value");
    return;
  }
  setTimeout(() => console.log(message), delayMs);
}
```

---

## ✅ ASSIGNMENT 3: OTP Generation Service (Promise)

### Title

**Generate Secure OTP Asynchronously**

### Problem Statement

Many systems generate One-Time Passwords (OTP) using backend services.
This operation is asynchronous due to cryptographic and network overhead.

### Task / Requirements

* Input: `length`
* Generate numeric OTP
* Resolve OTP as a **string**
* Reject if length is not exactly 6

### Code Stub

```js
function generateOTP(length) {
  // TODO
}
```

### Sample Input & Output

```js
generateOTP(6).then(console.log);
```

### Test Cases

```js
generateOTP(6).then(console.log);
generateOTP(4).catch(console.error);
generateOTP("6").catch(console.error);
```

### Solution

```js
function generateOTP(length) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (length !== 6) {
        reject("OTP must be 6 digits");
        return;
      }
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      resolve(otp);
    }, 500);
  });
}
```

---

## ✅ ASSIGNMENT 4: File Upload Simulation (Promise)

### Title

**Simulate File Upload Process**

### Problem Statement

File uploads are asynchronous operations due to network latency.
Your task is to simulate an upload process that either succeeds or fails.

### Task / Requirements

* Input: `fileName`
* Reject if fileName is empty or missing
* Resolve `"Upload successful"` after delay

### Code Stub

```js
function uploadFile(fileName) {
  // TODO
}
```

### Test Cases

```js
uploadFile("resume.pdf").then(console.log);
uploadFile("").catch(console.error);
```

### Solution

```js
function uploadFile(fileName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!fileName) {
        reject("No file selected");
      } else {
        resolve("Upload successful");
      }
    }, 700);
  });
}
```

---

## ✅ ASSIGNMENT 5: Multi-Step Notification Flow (Promise Chaining)

### Title

**Execute Notification Flow Sequentially**

### Problem Statement

Certain workflows require steps to execute **one after another**, not in parallel.
For example, a user must be notified, then the action logged, and finally archived.

### Task / Requirements

* Step 1: notify user
* Step 2: log action
* Step 3: archive record
* Pass output from one step to the next

### Code Stub

```js
function notifyUser() {}
function logAction(message) {}
function archiveAction(message) {}
```

### Sample Input & Output

```
User notified → Logged → Archived
```

### Solution

```js
function notifyUser() {
  return Promise.resolve("User notified");
}

function logAction(message) {
  return Promise.resolve(`${message} → Logged`);
}

function archiveAction(message) {
  return Promise.resolve(`${message} → Archived`);
}
```

---

## ✅ ASSIGNMENT 6: Product Data Fetch (async/await)

### Title

**Fetch Product Details Using async/await**

### Problem Statement

Fetching product details from a database or API is asynchronous.
You must handle invalid product IDs properly.

### Task / Requirements

* Throw error if productId ≤ 0
* Simulate async delay
* Return product object

### Code Stub

```js
async function fetchProduct(productId) {
  // TODO
}
```

### Test Cases

```js
fetchProduct(3).then(console.log);
fetchProduct(0).catch(console.error);
```

### Solution

```js
async function fetchProduct(productId) {
  if (productId <= 0) {
    throw new Error("Invalid product ID");
  }

  await new Promise(res => setTimeout(res, 400));
  return { id: productId, status: "available" };
}
```

---

## ✅ ASSIGNMENT 7: API Retry Logic (Promise)

### Title

**Retry API Call Once on Failure**

### Problem Statement

Network calls may fail intermittently.
To improve reliability, systems often retry failed operations once before giving up.

### Task / Requirements

* Accept function returning promise
* Retry exactly once if first attempt fails

### Code Stub

```js
function retryOnce(apiFn) {
  // TODO
}
```

### Solution

```js
function retryOnce(apiFn) {
  return apiFn().catch(() => apiFn());
}
```

---

## ✅ ASSIGNMENT 8: Promise Timeout Utility

### Title

**Reject Promise If It Takes Too Long**

### Problem Statement

To prevent UI freezing, promises must fail if they exceed a time limit.

### Task / Requirements

* Wrap any promise
* Reject if timeout reached first

### Code Stub

```js
function withTimeout(promise, ms) {
  // TODO
}
```

### Solution

```js
function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject("Operation timed out"), ms)
    )
  ]);
}
```

---

## ✅ ASSIGNMENT 9: Dashboard Widget Loader (Promise.all)

### Title

**Load All Dashboard Widgets**

### Problem Statement

A dashboard shows multiple widgets.
All widgets must load successfully before displaying the dashboard.

### Task / Requirements

* Accept array of functions returning promises
* Fail if any widget fails

### Code Stub

```js
function loadDashboard(widgets) {
  // TODO
}
```

### Solution

```js
function loadDashboard(widgets) {
  return Promise.all(widgets.map(w => w()));
}
```

---

## ✅ ASSIGNMENT 10: Fastest Response Selector (Promise.race)

### Title

**Select Fastest Service Response**

### Problem Statement

Multiple services provide the same data.
Use the fastest response to improve performance.

### Code Stub

```js
function fastestService(services) {
  // TODO
}
```

### Solution

```js
function fastestService(services) {
  return Promise.race(services);
}
```

---

## ✅ ASSIGNMENT 11: Batch Job Report (Promise.allSettled)

### Title

**Generate Complete Job Execution Report**

### Problem Statement

In batch processing systems, some jobs may succeed while others fail.
You must return the result of **every job**, regardless of outcome.

### Code Stub

```js
function generateReport(jobs) {
  // TODO
}
```

### Solution

```js
function generateReport(jobs) {
  return Promise.allSettled(jobs);
}
```

---

## ✅ ASSIGNMENT 12: Backup Recovery System (Promise.any)

### Title

**Recover Data Using First Available Backup**

### Problem Statement

A system attempts recovery from multiple backups.
Use the first backup that successfully restores data.

### Code Stub

```js
function recoverFromBackup(backups) {
  // TODO
}
```

### Solution

```js
function recoverFromBackup(backups) {
  return Promise.any(backups);
}
```

---

## ✅ ASSIGNMENT 13: Sequential Task Executor (async/await)

### Title

**Run Tasks Sequentially Using async/await**

### Problem Statement

Certain operations must execute strictly one after another to maintain consistency.

### Code Stub

```js
async function runSequential(tasks) {
  // TODO
}
```

### Solution

```js
async function runSequential(tasks) {
  const results = [];
  for (const task of tasks) {
    results.push(await task());
  }
  return results;
}
```

---

## ✅ ASSIGNMENT 14: Parallel API Loader (async/await)

### Title

**Fetch Multiple APIs in Parallel**

### Problem Statement

Independent APIs should be fetched simultaneously for better performance.

### Code Stub

```js
async function fetchAll(apis) {
  // TODO
}
```

### Solution

```js
async function fetchAll(apis) {
  return await Promise.all(apis.map(api => api()));
}
```

---

## ✅ ASSIGNMENT 15: Graceful Error Handler

### Title

**Handle Errors Gracefully in Async Flow**

### Problem Statement

Errors should not crash the entire application.

### Code Stub

```js
async function safeExecute(fn) {
  // TODO
}
```

### Solution

```js
async function safeExecute(fn) {
  try {
    return await fn();
  } catch (err) {
    return "Operation failed";
  }
}
```

---


## ✅ ASSIGNMENT 16: Delayed Order Confirmation (Callback)

### Title

**Confirm Order After Processing Delay**

### Problem Statement

In e-commerce systems, orders are not confirmed instantly.
The system first verifies inventory and payment before confirming the order.
This process is asynchronous and uses a callback to notify the result.

### Task / Requirements

* Input:

  * `orderId`
  * `callback(error, result)`
* Use `setTimeout` (1 second)
* If orderId is not a positive number → error
* Else return `{ orderId, status: "confirmed" }`

### Code Stub

```js
function confirmOrder(orderId, callback) {
  // TODO
}
```

### Sample Input & Output

```js
confirmOrder(101, console.log);
```

### Test Cases

```js
confirmOrder(10, console.log);
confirmOrder(-1, console.log);
confirmOrder("A12", console.log);
```

### Solution

```js
function confirmOrder(orderId, callback) {
  setTimeout(() => {
    if (typeof orderId !== "number" || orderId <= 0) {
      callback("Invalid order ID");
      return;
    }
    callback(null, { orderId, status: "confirmed" });
  }, 1000);
}
```

---

## ✅ ASSIGNMENT 17: Auto Logout Timer (setTimeout)

### Title

**Automatically Logout User After Inactivity**

### Problem Statement

For security reasons, applications log users out after inactivity.
You are implementing a timer that logs out a user after a specified time.

### Task / Requirements

* Input: `username`, `timeoutSeconds`
* If timeoutSeconds < 1 → error
* Log logout message after timeout

### Code Stub

```js
function autoLogout(username, timeoutSeconds) {
  // TODO
}
```

### Test Cases

```js
autoLogout("admin", 3);
autoLogout("guest", 0);
```

### Solution

```js
function autoLogout(username, timeoutSeconds) {
  if (timeoutSeconds < 1) {
    console.error("Invalid timeout");
    return;
  }
  setTimeout(() => {
    console.log(`${username} logged out due to inactivity`);
  }, timeoutSeconds * 1000);
}
```

---

## ✅ ASSIGNMENT 18: Payment Validation (Promise)

### Title

**Validate Payment Transaction**

### Problem Statement

Before completing a purchase, the payment gateway validates the transaction.
This process involves network communication and is asynchronous.

### Task / Requirements

* Input: `amount`
* Resolve `"Payment Approved"` if amount > 0
* Reject if amount ≤ 0 or invalid

### Code Stub

```js
function validatePayment(amount) {
  // TODO
}
```

### Test Cases

```js
validatePayment(500).then(console.log);
validatePayment(0).catch(console.error);
```

### Solution

```js
function validatePayment(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof amount !== "number" || amount <= 0) {
        reject("Invalid payment amount");
      } else {
        resolve("Payment Approved");
      }
    }, 600);
  });
}
```

---

## ✅ ASSIGNMENT 19: User Registration Flow (Promise Chaining)

### Title

**Register User → Send Welcome Email → Create Profile**

### Problem Statement

User registration involves multiple dependent steps that must execute sequentially.
Each step depends on the successful completion of the previous one.

### Task / Requirements

* Step 1: registerUser
* Step 2: sendWelcomeEmail
* Step 3: createProfile
* Use promise chaining

### Code Stub

```js
function registerUser() {}
function sendWelcomeEmail(userId) {}
function createProfile(userId) {}
```

### Sample Input & Output

```
User registered → Welcome email sent → Profile created
```

### Solution

```js
function registerUser() {
  return Promise.resolve(1);
}

function sendWelcomeEmail(userId) {
  return Promise.resolve(`Welcome email sent to user ${userId}`);
}

function createProfile(message) {
  return Promise.resolve(`${message} → Profile created`);
}
```

---

## ✅ ASSIGNMENT 20: Fetch User Settings (async/await)

### Title

**Load User Settings from Server**

### Problem Statement

User preferences are stored remotely and fetched when the application starts.
Errors must be handled gracefully.

### Task / Requirements

* Throw error if userId invalid
* Return settings object

### Code Stub

```js
async function fetchSettings(userId) {
  // TODO
}
```

### Test Cases

```js
fetchSettings(2).then(console.log);
fetchSettings(-1).catch(console.error);
```

### Solution

```js
async function fetchSettings(userId) {
  if (userId <= 0) {
    throw new Error("Invalid user ID");
  }

  await new Promise(res => setTimeout(res, 500));
  return { theme: "dark", notifications: true };
}
```

---

## ✅ ASSIGNMENT 21: Sequential Backup Upload (async/await)

### Title

**Upload Backups One by One**

### Problem Statement

To reduce server load, backups must be uploaded sequentially rather than in parallel.

### Task / Requirements

* Input: array of functions returning promises
* Upload one backup at a time
* Return results array

### Code Stub

```js
async function uploadSequentially(backups) {
  // TODO
}
```

### Solution

```js
async function uploadSequentially(backups) {
  const results = [];
  for (const backup of backups) {
    results.push(await backup());
  }
  return results;
}
```

---

## ✅ ASSIGNMENT 22: Parallel Email Dispatch (Promise.all)

### Title

**Send Promotional Emails in Parallel**

### Problem Statement

Marketing emails can be sent simultaneously to improve speed.

### Task / Requirements

* Input: array of email sender functions
* Send all emails at once

### Code Stub

```js
function sendAllEmails(tasks) {
  // TODO
}
```

### Solution

```js
function sendAllEmails(tasks) {
  return Promise.all(tasks.map(task => task()));
}
```

---

## ✅ ASSIGNMENT 23: Fastest Location Service (Promise.race)

### Title

**Choose Fastest Location Provider**

### Problem Statement

Different providers offer location data with varying latency.
Use the fastest available response.

### Code Stub

```js
function getLocation(providers) {
  // TODO
}
```

### Solution

```js
function getLocation(providers) {
  return Promise.race(providers);
}
```

---

## ✅ ASSIGNMENT 24: Job Status Monitor (Promise.allSettled)

### Title

**Monitor Background Job Status**

### Problem Statement

Background jobs may succeed or fail independently.
The system must report the outcome of every job.

### Code Stub

```js
function monitorJobs(jobs) {
  // TODO
}
```

### Solution

```js
function monitorJobs(jobs) {
  return Promise.allSettled(jobs);
}
```

---

## ✅ ASSIGNMENT 25: Service Fallback Mechanism (Promise.any)

### Title

**Use First Available Service Provider**

### Problem Statement

If the primary service fails, fallback services should be attempted automatically.

### Code Stub

```js
function useService(services) {
  // TODO
}
```

### Solution

```js
function useService(services) {
  return Promise.any(services);
}
```

---

## ✅ ASSIGNMENT 26: Delayed Retry Mechanism

### Title

**Retry Operation After Delay**

### Problem Statement

Some operations should retry after a short delay if they fail initially.

### Task / Requirements

* Retry once after 1 second
* Return final result

### Code Stub

```js
async function retryWithDelay(task) {
  // TODO
}
```

### Solution

```js
async function retryWithDelay(task) {
  try {
    return await task();
  } catch {
    await new Promise(res => setTimeout(res, 1000));
    return task();
  }
}
```

---

## ✅ ASSIGNMENT 27: API Call Rate Limiter

### Title

**Limit API Calls Sequentially**

### Problem Statement

To avoid hitting rate limits, API calls must be spaced out.

### Task / Requirements

* Delay 500ms between calls
* Execute sequentially

### Code Stub

```js
async function rateLimitedCalls(calls) {
  // TODO
}
```

### Solution

```js
async function rateLimitedCalls(calls) {
  const results = [];
  for (const call of calls) {
    results.push(await call());
    await new Promise(res => setTimeout(res, 500));
  }
  return results;
}
```

---

## ✅ ASSIGNMENT 28: Cancelable Timeout

### Title

**Create Cancelable Delayed Action**

### Problem Statement

Some delayed operations must be cancelable (e.g., undo actions).

### Task / Requirements

* Return cancel function

### Code Stub

```js
function createCancelableTask(fn, delay) {
  // TODO
}
```

### Solution

```js
function createCancelableTask(fn, delay) {
  const id = setTimeout(fn, delay);
  return () => clearTimeout(id);
}
```

---

## ✅ ASSIGNMENT 29: Graceful Shutdown Handler

### Title

**Complete Pending Tasks Before Shutdown**

### Problem Statement

Before shutting down, systems must finish ongoing tasks safely.

### Code Stub

```js
async function gracefulShutdown(tasks) {
  // TODO
}
```

### Solution

```js
async function gracefulShutdown(tasks) {
  for (const task of tasks) {
    await task();
  }
  return "Shutdown complete";
}
```

---

## ✅ ASSIGNMENT 30: Async Workflow Orchestrator

### Title

**Orchestrate Complete Async Workflow**

### Problem Statement

Complex systems often involve sequential and parallel steps combined together.

### Task / Requirements

* Step 1: Run setup tasks sequentially
* Step 2: Run main tasks in parallel
* Step 3: Cleanup sequentially

### Code Stub

```js
async function orchestrate(setup, main, cleanup) {
  // TODO
}
```

### Solution

```js
async function orchestrate(setup, main, cleanup) {
  for (const task of setup) await task();
  const mainResults = await Promise.all(main.map(t => t()));
  for (const task of cleanup) await task();
  return mainResults;
}
```





