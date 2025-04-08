import './globals.css';
import SessionWrapper from '../components/SessionWrapper';

export const metadata = {
  title: 'Google Auth Demo',
  description: 'Simple Google Sign-In using NextAuth and MUI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
