import { Inter } from 'next/font/google';
import { StoreProvider } from './redux/store-provider'; 
import Header from './header/header';
import Footer from './footer/footer';
import MediaQuery from './shared/media-query/media-query';
import './styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Drag13 blog',
  description: 'Super description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className}>
          <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <MediaQuery />
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
          </div>
        </body>
      </StoreProvider>
    </html>
  );
}
