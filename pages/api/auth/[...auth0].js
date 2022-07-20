import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

    export default handleAuth({
      async login(request, response) {
        await handleLogin(request, response, {
          returnTo: '/',
        });
      },
    });
