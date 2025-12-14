// import { Header } from '../Header';
import { useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError(); // {status: 404, statusText: 'Not Found', data: null}
  console.log(error);
  return <div>{isError(error) && <p>{error.statusText}</p>} </div>;
}

function isError(error: any): error is { statusText: string } {
  return 'statusText' in error;
}
