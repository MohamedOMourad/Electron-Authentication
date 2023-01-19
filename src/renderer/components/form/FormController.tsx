import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'renderer/redux/hooks/app';

export enum LoginStages {
  USERNAME = 'username',
  PASSWORD = 'password',
  RESET_PASSWORD = 'reset password',
}

export type FormControllerProps = {
  stage?: LoginStages;
};

const FormController = () => {
  const { isAddingAccounts } = useAppSelector((state) => state.User);
  const [resetToken, setResetToken] = useState<string | null>(null);
  const navigate = useNavigate();
  const navigateToUserNameStage = () => {
    navigate(`/login?stage=${LoginStages.PASSWORD}`);
  };
  const navigateToPasswordStage = () => {
    navigate(`/login?stage=${LoginStages.PASSWORD}`);
  };
  const navigateToResetPasswordStage = () => {
    navigate(`/login?stage=${LoginStages.PASSWORD}`);
  };
  return <div>FormController</div>;
};

export default FormController;
