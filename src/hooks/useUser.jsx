import { useState } from "react";

import defaults from "../defaults";

/*
  The idea behind this hook is that it will be where I write user Authentication related
  stuff. This hook is what you will interact with if you need to get state on anything related
  to the current user, or change who the current user is. I'll build this out to something when
  I integrate an authentication service like Google Authenticator.
*/
const useUser = () => {
  return {
    user: defaults.user,
  };
};

export default useUser;