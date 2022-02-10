export default function ErrorRoute() {
  throw new Error("/error always throws an error during render");
  return <div>Hi!</div>;
}