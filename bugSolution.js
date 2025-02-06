```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correctly setting the state using the setter function
    setCount(count + 1); 
  }, []);

  return <div>Count: {count}</div>;
}
```