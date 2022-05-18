import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [user3, loading3, error3] = useAuthState(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user3) {
      navigate(from);
    }
  }, [user3]);

  if (loading1 || loading3) {
    <button class="btn btn-square loading"></button>;
  }

  return (
    <div className="lg:w-2/5 w-4/5 m-auto">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-7 mt-10 flex flex-col">
        <h1 className="text-lg font-bold text-center ">Login</h1>
        <button className="btn" onClick={() => signInWithGoogle()}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
