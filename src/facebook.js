import React from 'react';
import FacebookLogin from 'react-facebook-login';

function Facebook() {
  const handleFacebookLogin = (response) => {
    console.log(response);
  };

  return (
      <FacebookLogin
        appId="188891930628394"
        autoLoad={false}
        fields="name,email,picture"
        callback={handleFacebookLogin}
        render={(renderProps) => (
          <button onClick={renderProps.onClick}>Login with Facebook</button>
        )}
      />
  );
}

export default Facebook;
