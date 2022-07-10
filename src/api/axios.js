import React from 'react'
import axios from 'axios';

export default axios.create({
    // base url can be changed here
    // for development, use local json-server
    baseURL: "https://laravel.aikho.store/public/api/"
});