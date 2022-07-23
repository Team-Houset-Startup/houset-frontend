import { useContext, useState } from 'react';
import AuthContext from '../context/AuthProvider';
import { useAuth } from './useAuth';

export default function useToken() {
  const { auth, setAuth } = useContext(AuthContext);

  const getToken = () => {
    const tokenSession = sessionStorage.getItem('token');
    const userToken = tokenSession;
    // return userToken?.data.token
    return userToken?.data;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem('token', userToken);
    setToken(userToken);
  };

  const removeToken = () => {
    sessionStorage.removeItem('token');
    setToken(null);
  };

  return {
    token,
    setToken: saveToken,
    unsetToken: removeToken
  }
}