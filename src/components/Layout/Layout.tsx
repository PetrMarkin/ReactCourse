import ClientLayout from '../ClientLayout/ClientLayout';

interface SearchParams {
  page?: string;
  searchTherm?: string;
  details?: string;
}

const Layout = ({ searchParams }: { searchParams: SearchParams }) => {
  return <ClientLayout searchParams={searchParams} />;
};

export default Layout;
