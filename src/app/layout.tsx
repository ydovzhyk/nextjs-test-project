import { Inter } from 'next/font/google';
import { StoreProvider } from './redux/store-provider'; 
import Header from './header/header';
import Footer from './footer/footer';
import MediaQuery from './shared/media-query/media-query';
import AuthProvider from './shared/auth-provider/auth-provider';
import { HeaderProvider } from './helpers/HeaderContext';
import ModalWindow from './shared/components/modal-window-message/modal-window-message';
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
            <ModalWindow />
            <MediaQuery />
            <AuthProvider />
            <HeaderProvider >
              <Header />
              <main style={{ flex: 1 }}>{children}</main>
              <Footer />
            </HeaderProvider>
          </div>
        </body>
      </StoreProvider>
    </html>
  );
}
