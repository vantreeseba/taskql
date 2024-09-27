import { useDeferredLoaderData } from '~/hooks/useDeferredLoaderData';

export const Loader = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('loading finished');
      resolve('hello');
    }, 1500);
  });
};

export default function Component() {
  const data = useDeferredLoaderData();
  console.log('subthing data', data);

  return (
    <>
      <div>
        <h2>SubThing</h2>
      </div>
    </>
  );
}
