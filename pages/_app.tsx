import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {ErrorBoundary} from 'react-error-boundary';
import {Analytics} from "@vercel/analytics/react";
import type {Session} from "next-auth";
import {SessionProvider} from "next-auth/react";
import {CustomButton} from "@/components/shared/CustomButton";
import {Provider as RWBProvider} from "react-wrap-balancer";
import Waitlist from "contexts/waitlist";
import '../styles/inter-font.css';
import {register} from 'swiper/element/bundle';
import {Notifications} from "@/components/shared/notifications/notifications";
register();


const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <CustomButton label="refresh" className="mt-4" onClick={() => window.location.assign(window.location.origin)} />
    </div>
  );
};

export default function MyApp({
  Component,
  pageProps: {session, ...pageProps},
}: AppProps<{session: Session}>) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <SessionProvider>
        <Notifications />
        <Waitlist>
          <RWBProvider>
            <main >
              <Component {...pageProps} />
            </main>
          </RWBProvider>
          <Analytics />
        </Waitlist>
      </SessionProvider>
    </ErrorBoundary>
  );
}
