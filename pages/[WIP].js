import { useRouter } from 'next/router';

const WipItems = () => {
  const router = useRouter();
  const { WIP } = router.query;

  return (
    <div className={`flex justify-center items-center h-screen`}>
      <h1>{WIP} Em Progresso</h1>
    </div>
  );
};

export default WipItems;
