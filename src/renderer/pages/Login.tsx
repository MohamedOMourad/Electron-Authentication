import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormController from 'renderer/components/form/FormController';
import { useAppSelector } from 'renderer/redux/hooks/app';

const Login = () => {
  return (
    <>
      <FormController />
    </>
  );
};

export default Login;
