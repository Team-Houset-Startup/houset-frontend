import { useContext, useState } from 'react';
import AuthContext from '../context/AuthProvider';
import { useAuth } from './useAuth';

export default function useToken() {
  const { auth, setAuth } = useContext(AuthContext);

  const getToken = () => {
    const tokenString = localStorage.getItem('accessToken');
    const userToken = JSON.parse(tokenString);
    // return userToken?.data.token
    return userToken?.data;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('accessToken', JSON.stringify(userToken));
    console.log(userToken)
    setToken(userToken.data.accessToken);
  };

  // const removeToken = () => {
  //   sessionStorage.removeItem('token');
  //   setToken(null);
  // };

  return {
    setToken: saveToken,
    token
  }
}