import { Backstage } from '@/screens/Backstage';
import { ThankPage } from '@/screens/ThankPage/ThankPage';

import { FC } from 'react';

const ThankYouPage: FC = () => {
  return (
    <>
      <ThankPage />
      <Backstage isThankPage />
    </>
  );
};

export default ThankYouPage;
