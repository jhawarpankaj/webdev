/**
 * Exercise 1
 * ============================================
 *
 * When "Run" is clicked, run the expensiveCalculation function and then update
 * the #output div to announce the run has finished.
 *
 * When "Run with worker" is clicked, do similar, but delegate the work to the
 * worker. You'll need to create a worker to post messages to it, or listen
 * for when it finishes. Your code for the web worker should go in
 * `webworkers-worker.js`.
 *
 * Notice how the clock freezes when you run the expensive calculation in the
 * regular runtime environment, but it doesn't when the worker does it.
 */

// You code goes here

const expensiveCalculation = () => {
  for (let i = 0; i < 5000000000; i++) {}
}

/**
 * ============================================
 * You can ignore code below this point, it's for demonstration purposes
 * to regularly update the clock. This allows you to see how the main thread
 * and DOM updates get blocked by a long-running process.
 * ============================================
 */

const updateTime = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  document.getElementById('ex1-display').innerText = `${hours}:${minutes}:${seconds}`
}

updateTime()

setInterval(updateTime, 1000)
