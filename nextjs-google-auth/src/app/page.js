'use client';

import { Container, Typography, Button } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <Container maxWidth="sm" sx={{ mt: 10, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Google Sign-In with MUI
      </Typography>

      {session ? (
        <>
          <Typography variant="h6">Welcome, {session.user?.name}</Typography>
          <Button variant="contained" color="secondary" onClick={() => signOut()}>
            Sign Out
          </Button>
        </>
      ) : (
        <Button variant="contained" onClick={() => signIn('google')}>
          Sign in with Google
        </Button>
      )}
    </Container>
  );
}
