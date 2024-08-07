import { useRouter } from 'next/router';
import Layout from '../src/components/Layout/Layout';
import DetailedCard from '../src/components/DetailedCard/DetailedCard';
import { useEffect, useState } from 'react';
import { Result } from '../src/interfaces/interfaces';

interface HomePageProps {
  initialData: Result | null;
  initialError: string | null;
}

const HomePage = ({ initialData, initialError }: HomePageProps) => {
  const router = useRouter();
  const id = router.query.details as string | undefined;
  const [isCardVisible, setCardVisible] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      setCardVisible(true);
    } else {
      setCardVisible(false);
    }
  }, [id]);

  const handleClose = async () => {
    setCardVisible(false);
    await router.push('/', undefined, { shallow: true });
  };

  return (
    <Layout>
      {isCardVisible && (
        <DetailedCard
          initialData={initialData}
          initialError={initialError}
          onClose={handleClose}
        />
      )}
    </Layout>
  );
};

export default HomePage;
