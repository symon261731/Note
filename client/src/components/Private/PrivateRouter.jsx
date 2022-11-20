/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRouter({ isAllowed, redirect, children }) {
  if (!isAllowed) {
    return <Navigate to={redirect} replace />;
  }

  return children || <Outlet />;
}
