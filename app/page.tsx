import Layout from '../src/components/ClientLayout/ClientLayout';

interface SearchParams {
  page?: string;
  searchTherm?: string;
  details?: string;
}

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  return (
    <div className='main-container'>
      <Layout searchParams={searchParams} />
    </div>
  );
}
