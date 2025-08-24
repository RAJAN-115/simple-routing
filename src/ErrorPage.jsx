import { useRouteError, Link } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>😵 Oops! Page Not Found</h1>
      <p>Sorry, page नहीं मिला!</p>
      <p>
        Error: {error.status} - {error.statusText}
      </p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default ErrorPage;
