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
import { useState } from 'react';

const Box = styled('div');

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  const [index, setIndex] = useState(0);
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
          css={{ backgroundColor: 'LightPink', padding: '2em', fontSize: 24 }}
        >
          <Box>This text and button should be inside a pink box.</Box>
          <Box
            as="button"
            onClick={() => setIndex((i) => i + 1)}
            css={{ fontSize: 'inherit' }}
          >
            Click me to re-render the html tag
          </Box>
        </Box>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
