import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";

import { styled } from '@stitches/react';
import { ReactNode, useState } from 'react';

const Box = styled('div');

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );  
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document>
      <h1>This is the root route's ErrorBoundary</h1>
      <p>Error: {error.message}</p>
    </Document>
  );
}

function Document({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState(0);
  const [throwError, setThrowError] = useState(false);
  if (throwError) {
    throw new Error("you requested an error be thrown");
  }

  return (
    <html lang="en" key={index}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Box
          css={{ backgroundColor: 'LightPink', padding: '2em', fontSize: 24, display: 'flex', flexDirection: 'column', width: 300, gap: '1em' }}
        >
          <Box>This text and button should be inside a pink box.</Box>
          <Box
            as="button"
            onClick={() => setIndex((i) => i + 1)}
            css={{ fontSize: 'inherit' }}
          >
            Click me to re-render the html tag
          </Box>
          <Box
            as="button"
            onClick={() => setThrowError(true)}
            css={{ fontSize: 'inherit' }}
          >
            Click me to trigger the ErrorBoundary
          </Box>
        </Box>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}