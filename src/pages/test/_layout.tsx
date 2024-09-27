import { Outlet } from 'react-router';

export const Catch = () => {
  return <div>Something went wrong... Caught at _app error boundary</div>;
};

export const Pending = () => <div>Loading from test...</div>;

export default function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
