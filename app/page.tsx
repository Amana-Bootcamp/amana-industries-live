import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { ApiResponse } from '@/types';

// Dynamically import the Map component to ensure it's treated as a client component
const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => <p className="text-center p-10">Loading map...</p>,
});

async function getFactoryData() {
  try {
    const res = await fetch('http://amanabootcamp.org/api/fs-classwork-data/amana-industries', {
      // Revalidate data every hour
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch factory data');
    }

    const data: ApiResponse = await res.json();
    return data.factory_data;
  } catch (error) {
    console.error(error);
    // Return an empty array in case of an error
    return [];
  }
}

export default async function Home() {
  const factoryData = await getFactoryData();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-[--color-pale-yellow] p-3 text-center">
          <h3 className="text-2xl font-bold text-black">Factory Statuses</h3>
        </div>
        {factoryData.length > 0 ? (
          <Map factories={factoryData} />
        ) : (
          <p className="text-center text-red-500 p-10">
            Could not load factory data. Please try again later.
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}