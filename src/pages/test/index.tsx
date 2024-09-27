import { Await, useLoaderData, useNavigate } from 'react-router';
import { Button } from '~/components/ui/button';
import { useDeferredLoaderData } from '~/hooks/useDeferredLoaderData';

export const Loader = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('loading finished');
      resolve('loaded data here: 123');
    }, 500);
  });
};

export default function Component() {
  return (
    <>
      <div>
        <h2>Test Page</h2>
      </div>
      <SomeOtherComponent />
    </>
  );
}

function SomeOtherComponent() {
  const data = useDeferredLoaderData();
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h2>{data}</h2>
        <Button onClick={() => navigate('/test/sub/')}>SUB</Button>
      </div>
    </>
  );
}
