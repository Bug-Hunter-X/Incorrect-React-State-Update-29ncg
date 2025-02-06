# Incorrect React State Update
This example demonstrates a common mistake in React: directly modifying the state variable instead of using the setter function provided by useState.

The `bug.js` file contains the incorrect code, where the `count` variable is incremented directly instead of using `setCount`. This prevents React from detecting the change and re-rendering the component.

The `bugSolution.js` file shows the correct way to update the state using the `setCount` function, ensuring React correctly updates the UI.