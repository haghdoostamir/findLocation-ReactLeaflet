import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./SSRMap'), {
  ssr: false
});

export default DynamicMap;