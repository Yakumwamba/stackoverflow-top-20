# **Top 20 Stack Overflow Users**

This application fetches the top 20 Stack Overflow users and displays them using the `UserList` component. Inside `UserList`, there is a `UserCard` that gets rendered as a call to the API is made. The call to the API is cached such that when the first request is made, the response is stored in `localStorage`. This avoids the application from making too many API requests, thus improving performance and speed. The application uses Framer Motion for the display of `UserCard` in the `UserList` component. The user card, upon tap, expands, displaying the follow and block buttons.

Please note that the follow and block buttons in the application do not make any API calls, and they are only indicators for simulation purposes.


##  [Demo](https://stackoverflow-top-20.vercel.com)
## **Prerequisites**

- Node version 18
- React 18
- Documentation
- Use TypeScript

## **Installation**

1. Ensure that you have Node.js version 18 installed. You can use ~~[nvm](https://github.com/nvm-sh/nvm)~~ to manage your Node.js versions:

`nvm install 18`
`nvm use 18`

2. Install the dependencies:

`yarn install`

3. Start the application:

`yarn start`

## **Key Requirements**

- [Readme.md](http://Readme.md) ✅
- React 18 ✅
- Documentation ✅
- Use TypeScript ✅
- Testing ❌

## **Duration of Project**

- Review: 0.5 hours
- Design: 0.5 hours
- Implementation: 1.5 hours
- Testing: Not performed due to time constraints ❌
- Documentation: 0.5 hours

## **Optional Bonus Points**

- Implement filtering / search input ✅
- Caching Strategy ✅
- Add pagination ✅

# Documentation

Documentation to some of the functions that I made use of.

## useUsers hook

The `useUsers` custom hook is a React hook that manages an array of user objects fetched from an API. It initializes the state with an empty array and updates the state with the fetched user data when the component mounts.

## `UserList`

The `UserList` component accepts the following props:

- `users`: Represents an array of user objects containing user information such as `user_id`, `display_name`, and `profile_image`.

To use the `UserList` component, pass the `users` prop, and the component will automatically display the searchable user list with pagination and notifications.

## UserCard **Component**

The `UserCard` component is a reusable user card component designed to display user information, reputation, and actions for following, unfollowing, and blocking users. It is a feature-rich and customizable component that provides a visually appealing way to display user information and interact with users on your platform.

## SearchInput

The `SearchInput` component accepts the following props:

- `value`: Represents the current input value.
- `onChange`: Callback function invoked when the input value changes.

To use the `SearchInput` component, pass the `value` and `onChange` props, and handle the `onChange` event in your component to update the state or perform any filtering actions based on the user input.

## useStoredUsers hook

The useStoredUsers hook returns an array of user objects and a function to update the users array.

1. Call the hook within a functional component:

`const UsersList = () => {
  const [users, setUsers] = useStoredUsers();

  // You can now use the users array and setUsers function in your component
  // ...

  return (
    // Your component JSX
  );
};`

2. Use the `users` array and `setUsers` function to manage the stored users in your component:

`// Example usage of users array
{users.map((user) => <div key={user.user_id}>{user.display_name}</div>)}

// Example usage of setUsers function
setUsers([...users, newUser]);`

## useInternetConnectivity Hook

The `useInternetConnectivity` hook utilizes the `useState` and `useEffect` hooks from React to manage the `isOnline` state and update it based on the user's network connectivity status. It listens to the `online` and `offline` events on the `window` object and updates the `isOnline` state accordingly. When the user's connection status changes, the `toast` function from the `react-toastify` library is used to display a notification informing the user of the change in their connectivity status.

## **Pagination**

The pagination component accepts the following props:

- `currentPage`: Represents the current active page (1-based index).
- `totalItems`: Represents the total number of items.
- `itemsPerPage`: Represents the maximum number of items visible in a single page.
- `onPageChange`: Callback function invoked with the updated page value when the page is changed.

The pagination component calculates the total number of pages and handles page changes by updating the `currentPage` state. The component also displays the current page and total pages, along with the "Previous" and "Next" buttons to navigate between pages.

## **UX Library Research**

- Framer Motion

This project was developed within 2.5 hours due to time constraints. Unit tests were not added to this application.
