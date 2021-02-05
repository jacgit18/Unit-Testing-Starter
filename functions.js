const axios = require('axios');


const functions =  {
    add: (num1,num2) => num1 + num2,
    isNull: () => null,
    checkvalue : (x) => x,
    createUser: () => {
        const user ={ firstName: 'John'};
        user['lastName'] = 'Tracy';
        return user;

    },
    fetchUser: () =>
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')// fake rest API for testing
      .then(res => res.data)
      .catch(err => 'error')

}

// messes with test cases for some reason
// const functions = () => {
//     add: (num1,num2) => num1 + num2
// }


module.exports = functions  ;

// messes with test cases for some reason
// module.exports = { functions } ;