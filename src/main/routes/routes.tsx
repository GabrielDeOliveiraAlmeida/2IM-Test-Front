import { Routes, Route } from 'react-router-dom';

import {
  makeFormPage as MakePageFormPage,
  makeStatusPage as MakeStatusPage,
  makeHomePage as MakeHomePage,
} from '../factories/pages';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MakeHomePage />} />
      <Route path='/new' element={<MakePageFormPage />} />
      <Route path='/status/:processId' element={<MakeStatusPage />} />
    </Routes>
  );
};

export default PublicRoutes;
