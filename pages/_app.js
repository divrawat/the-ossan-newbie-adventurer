import { Shantell_Sans } from '@next/font/google';
import { Rubik } from '@next/font/google';
import "@/styles/globals.css";
import NProgress from 'nprogress';
import Router from 'next/router';
import Popup from '@/components/Popup';
import { useEffect } from 'react';
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({ showSpinner: false })

const rubik = Rubik({ subsets: ['latin'], preload: false });

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   const disableRightClick = (event) => { event.preventDefault(); };
  //   document.addEventListener('contextmenu', disableRightClick);
  // }, []);
  return (
    <>
      <Popup />
      <style jsx global>{`
         :root {--font-shantell-sans: ${rubik.style.fontFamily}; }
        body {font-family: var(--font-shantell-sans);}        
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;