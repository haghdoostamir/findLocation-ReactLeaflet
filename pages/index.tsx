import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('../components/Layout/Map'), {
  ssr: false
});

export default function Home() {
  return (
    <DynamicMap/>
  );
}
