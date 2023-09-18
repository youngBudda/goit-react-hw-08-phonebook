import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledSharedLayout } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <StyledSharedLayout>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StyledSharedLayout>
  );
};

export default SharedLayout;
