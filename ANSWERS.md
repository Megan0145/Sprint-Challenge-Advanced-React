- [ ] Why would you use class component over function components (removing hooks from the question)?

Using class components allows you to make use of various component lifecycle methods that the React team has built in, giving you lots of control of how your components render/function (eg render, componentDidMount, componentDidUpdate).

- [ ] Name three lifecycle methods and their purposes.

componentDidMount() : this is called when, and only when, a component and all its sub-components render. For this reason it's very often used to make http requests, because we only want it to fire once. Similar to useEffect in functional components.

Render() : used to render your component. Is the only required method in a class component. should always be kept pure (should not be used to modify component state, should return the same result on each invocation)

ComponentDidUpdate() : called every time a component updates. Can pass in previous props, compare them to current props and perform network requests if props do not match (network request may not be necessary if props have not changed).

- [ ] What is the purpose of a custom hook?

The purpose of a custom hook is to create functional blocks of code that can be reused to apply non-visual behaviour and stateful logic throughout your application; keeps code DRY. For example, if we had a form with multiple input fields. There is no need to have seperate change handler functions for each and every input field. We can instead create a custom hook to handle input for all fields

- [ ] Why is it important to test our apps?

Testing our apps eliminates the possibilty of bugs making their way into production code. It helps us to consider edge cases and have more trust in our app's functionality. 