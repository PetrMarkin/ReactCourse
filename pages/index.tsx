import { GetServerSideProps, NextPage } from 'next';
import { ResponseData } from '../src/interfaces/interfaces';
import Layout from '../src/components/Layout/Layout';
import DetailedCard from '../src/components/DetailedCard/DetailedCard';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { API_URL } from '../src/helpers/constants';

interface HomePageProps {
  initialData: ResponseData | null;
  isLoading: boolean;
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (
  context,
) => {
  const page = context.query.page || '1';
  const id = context.query.details;
  let data: ResponseData | null = null;
  let isLoading = false;

  try {
    if (id) {
      const response = await fetch(`${API_URL}/people/${id as string}/`);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      data = (await response.json()) as ResponseData;
    } else {
      isLoading = true;
      const response = await fetch(`${API_URL}/people?page=${page as string}`);
      if (!response.ok) {
        throw new Error('Failed to fetch people data');
      }
      data = (await response.json()) as ResponseData;
    }
    isLoading = false;
  } catch (err: unknown) {
    console.log(err instanceof Error ? err.message : 'Unknown error');
  }

  return {
    props: {
      initialData: data,
      isLoading,
    },
  };
};

const HomePage: NextPage<HomePageProps> = ({
  initialData,
  isLoading,
}: HomePageProps) => {
  const router = useRouter();
  const id = router.query.details as string;
  const [isCardVisible, setCardVisible] = useState<boolean>(false);

  const handleClose = async () => {
    setCardVisible(false);
    await router.push('/', undefined, { shallow: true });
  };

  useEffect(() => {
    if (id) {
      setCardVisible(true);
    } else {
      setCardVisible(false);
    }
  }, [id]);

  return (
    <Layout initialData={initialData} isLoading={isLoading}>
      {isCardVisible && (
        <DetailedCard
          onClose={handleClose}
          initialData={initialData.results[Number(id) - 1]}
        />
      )}
    </Layout>
  );
};

export default HomePage;
