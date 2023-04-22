import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/app/style/global.css';

import { BrowserRouter } from 'react-router-dom';

import PublicRoutes from './main/routes/routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='max-w-full justify-center flex pt-6 pb-6'>
        <div className='max-w-xl max-sm:m-4'>
          <PublicRoutes />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);
