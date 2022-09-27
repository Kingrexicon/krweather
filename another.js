// Constant URL value for JAAS API
const RAPIDAPI_API_URL = 'https://arjunkomath-jaas-json-as-a-service-v1.p.rapidapi.com/';
// Object with RapidAPI authorization headers and Content-Type header
const RAPIDAPI_REQUEST_HEADERS = {
    'X-RapidAPI-Host': 'arjunkomath-jaas-json-as-a-service-v1.p.rapidapi.com'
    , 'X-RapidAPI-Key': '7xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    , 'Content-Type': 'application/json'
  };
  // Variable to store ID
let STUDENT_ID = '';
// Object for examples
const student = {
  name: 'John'
  , surname: 'Doe'
  , age: 18
};

// Making a POST request using an axios instance from a connected library
axios.post(RAPIDAPI_API_URL, student, { headers: RAPIDAPI_REQUEST_HEADERS })
  // Handle a successful response from the server
  .then(response => {
          // Getting a data object from response that contains the necessary data from the server
          const data = response.data;
          console.log('data', data);
          // Save the unique id that the server gives to our object
          STUDENT_ID = data._id;
  })
  // Catch and print errors if any
  .catch(error => console.error('On create student error', error));