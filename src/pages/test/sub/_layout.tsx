import { Outlet } from 'react-router';

export const Pending = () => <div>Loading from _sub...</div>;

export default function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
