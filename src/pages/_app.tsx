import { Outlet } from 'react-router';
import { Dropecho } from '~/components/vt/link';

export const Catch = () => {
  return <div>Something went wrong... Caught at _app error boundary</div>;
};

export const Pending = () => <div>Loading from _app...</div>;

export default function App() {
  return (
    <div>
      <Menu />
      <div className="p-2">
        <Outlet />
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="flex gap-2 p-2">
      <Dropecho.Link to="/">Home</Dropecho.Link>
      <Dropecho.Link to="/test">Test</Dropecho.Link>
      <Dropecho.Link to="/other">Other</Dropecho.Link>
    </div>
  );
}
