```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of the return value of setInterval
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    // Missing cleanup function to clear the interval
  }, []);

  return <div>Count: {count}</div>;
}
```