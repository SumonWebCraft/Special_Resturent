import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  HelmetProvider } from 'react-helmet-async';
import { router } from './Router/Router.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>

<HelmetProvider>

<QueryClientProvider client={queryClient}>
<div className='max-w-screen-xl mx-auto'>
<RouterProvider router={router} />

</div>
    </QueryClientProvider>


</HelmetProvider>
</AuthProvider>
</StrictMode>,
)
