The main components used in this recipe app were the App.js and the installed components of RecipeCard.js and SearhBar.js

App.js

This code is used to build a Recipe App using the MealDB API. The App component is the root component and is responsible for rendering the search bar and recipe cards. The component uses useEffect and useState hooks from the React library.

The apiUrl variable is the URL of the MealDB API endpoint that will be used to fetch the recipe data. The searchRecipes function is used to perform the search and it makes an asynchronous call to the MealDB API using the fetch method. Once the data is retrieved, it is parsed using the json method and the resulting data is set to the recipes state.

The useEffect hook is used to call the searchRecipes function when the component first renders. This is done by providing an empty array as the second argument to useEffect. The handleSubmit function is used to call the searchRecipes function when the user submits the search form.

The SearchBar component is used to render the search bar and the RecipeCard component is used to render each recipe. The isLoading state is used to disable the search bar and recipe cards while the search is in progress, and the query state is used to store the user's search query.

Finally, the component renders the SearchBar component and the list of recipe cards, which are dynamically rendered using the map method to iterate over the recipes state. If no recipes are found, the component will display the message "No Recipes!".

Overall, this code provides an easy-to-use recipe search feature that allows users to find and browse recipes from the MealDB API. The code is simple and easy to understand, making it a great starting point for building more complex recipe applications.

Search Bar

The code provided defines a SearchBar component, which is a reusable and modular piece of UI that can be used to implement a search feature in a React application.

The SearchBar component receives four props: value, isLoading, handleSubmit, and onChange. These props are used to control the behavior and appearance of the search bar. The value prop is used to set the value of the input field, isLoading is used to disable the input field and submit button while a search is in progress, handleSubmit is a function that is called when the user submits the search form, and onChange is a function that is called when the user changes the value of the input field.

The code uses JSX to define the HTML elements of the SearchBar component, including the form element, the input element, and the submit button. The handleSubmit function is called when the user submits the form, and the onChange function is called whenever the value of the input field changes.

The component also uses conditional rendering to disable the submit button when the input field is empty or when a search is already in progress. This prevents users from submitting invalid or duplicate search requests.

Overall, this code provides a simple and effective way to implement a search bar in a React application that can be easily customized and integrated with other UI components.

SearchBar.js
The SearchBar component is used to implement a search feature in a React application. I used this code because it provides a simple and efficient way to create a search bar that can be easily customized and integrated with other UI components.

The component receives four props - value, isLoading, handleSubmit, and onChange. The value prop is used to set the value of the input field, the isLoading prop is used to disable the input field and submit button while a search is in progress, the handleSubmit prop is a function that is called when the user submits the search form, and the onChange prop is a function that is called when the user changes the value of the input field.

The component is implemented as a functional component that returns a JSX code block. The JSX code block includes a form element with an onSubmit event handler that calls the handleSubmit function when the form is submitted. The form also contains an input element that is used for the search query. This input element has an onChange event handler that calls the onChange function when the user enters or modifies the search query. The input element also has a value attribute that is bound to the value prop of the SearchBar component.

In addition, the component includes a submit button that is disabled when the isLoading prop is set to true or when the input field is empty. This helps to prevent the user from submitting invalid or duplicate search requests.

Overall, the SearchBar component is a simple and effective way to implement a search feature in a React application. The props that are passed to the component allow for customization of the search bar, while the code provides an efficient and intuitive way for users to search for and retrieve data.


RecipeCard

This code defines a functional component called RecipeCard, which takes in an object recipe as a prop. The component then extracts some specific properties from the recipe object using destructuring assignment, including idMeal, strMeal, strCategory, and strMealThumb.

The component returns a simple card layout containing an image of the meal, the category of the meal, the name of the meal, and a link to view the ingredients for the meal. The strMealThumb property is used as the image source and the strMeal property is used for the meal name. The strCategory property is used to display the category of the meal. Finally, the idMeal property is used to create a link to the meal details page on the MealDB website.

This component is used in the App component to display the list of recipes that match the user's search query.




THE LINK USED
 THEMEALDB:
https://www.themealdb.com/api.php


