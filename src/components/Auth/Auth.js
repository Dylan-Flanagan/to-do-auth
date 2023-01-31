import './Auth.css';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { useState } from 'react';
import { authUser } from '../../services/auth.js';
import { useUser } from '../../context/UserContext.js';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useUser();
  if (user) {
    return <Redirect to="/todos" />;
  }

  const submitAuth = async () => {
    // call authUser with email, password, type
    try {
      // if success
      const newUser = await authUser(email, password, type);
      // setUser in context
      setUser(newUser);
      // redirect to todos via re-render, trigger <Redirect
    } catch (e) {
      // else display error
      console.error(e);
    }
  };
  return <button onClick={submitAuth}>Submit</button>;
}
