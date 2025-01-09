# React 19 useEffect setInterval Memory Leak

This repository demonstrates a common error when using the `setInterval` function within a React `useEffect` hook.  Forgetting to clear the interval using `clearInterval` leads to memory leaks and unexpected behavior.

## Bug
The `bug.js` file contains the faulty code. The `setInterval` function is called within the `useEffect` hook, but there's no mechanism to stop it. This will lead to continuous updates and potential memory leaks.

## Solution
The `bugSolution.js` demonstrates the correct usage. A cleanup function is returned from the `useEffect` hook. This function is responsible for clearing the interval when the component unmounts or when the dependencies change.