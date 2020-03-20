import axios from 'axios';

const axiosWithAuth =() => {
    const token = localStorage.getItem('token');
    // console.log(token);
    
    return axios.create({
        baseURL: 'http://localhost:5001/api/',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
    });
};


export default axiosWithAuth;