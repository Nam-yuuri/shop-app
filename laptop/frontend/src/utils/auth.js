// import axios from 'axios';
// import jwtDecode from 'jwt-decode';

// export const createOrGetUser = async (response) => {
//     const decode: {name: string, pictrue: string, sub: string} = jwtDecode(response.credential);

//     const { name, pictrue, sub} = decode;

//     const user = {
//         _id: sub,
//         _type: 'user',
//         userName: name,
//         image: pictrue
//     }
//     console.log(decode)
//     console.log(decode.email)

//     // return decode.pictrue

//     // await axios.post('http://localhost:3000/auth', user)
// } 