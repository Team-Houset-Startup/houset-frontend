import React from 'react'
import axios from 'axios';

export default axios.create({
    // base url can be changed here
    // for temporary use reqres api
    // email: eve.holt@reqres.in; pass: cityslicka
    baseURL: 'https://reqres.in/api'
});