import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Ooops!..</h1>
      <h2>Something went wrong!!</h2>
      <h4>Error {err.status}:{err.statusText}</h4>
    </>
  );
};

export default Error;
