import { signIn } from 'next-auth/react';

export const handleSignIn = (e, personalLink) => {
  e.preventDefault();
  
  // Construct the callback URL conditionally
  const callbackUrl = personalLink 
    ? `/admin?personalLink=${encodeURIComponent(personalLink)}`
    : '/admin';

  signIn(undefined, { callbackUrl });
};