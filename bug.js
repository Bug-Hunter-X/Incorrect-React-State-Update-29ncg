```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly setting the state directly
    count = count + 1; 
  }, []);

  return <div>Count: {count}</div>;
}
```