1. What problem does the context API help solve?

The context API solves the problem of prop drilling down through components. It does this by creating a context object that is consumable by components rendering state.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store is the place where we are capable of mutating state by copying, altering and returning a new state objects for the view. Actions dispatch actions messages to the reducers in the store to call the corresponding reducer. The reducer executes the logic based on the message received and return the new mutated states to re-render. The store is the single place where state is stored, copied and altered; because it holds the dispatcher and reducers that do the logic work for our entire application.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is equivalent to global state as it has all the props  in initial state. Component state is just the state props applicable to the component. App state is for props that will be used across the application in multiple components, while component state would be more of an index o a mapped state rendering component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-Thunk is a middleware that provides the ability to handle asynchronous operations in action creators. Thunks are functions that are returned by another function, essentially deferring logic for later. Thunks receive action calls and can dispatch a different action or multiple actions in the reducer.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Context API over redux strictly for ease. The idea of context hooks simplifies the state management process over redux, because of all the under the hood actions. Context API allows me to have an initial state provided and used more directly in the components consuming the provided state.