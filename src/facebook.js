import React from 'react';
import FacebookLogin from 'react-facebook-login';

function Facebook() {
  const handleFacebookLogin = (response) => {
    console.log(response);
  };

  return (
    <div>
      <h1>Login with Facebook</h1>
      <FacebookLogin
        appId="188891930628394"
        autoLoad={false}
        fields="name,email,picture"
        callback={handleFacebookLogin}
        render={(renderProps) => (
          <button onClick={renderProps.onClick}>Login with Facebook</button>
        )}
      />
    </div>
  );
}

export default Facebook;
