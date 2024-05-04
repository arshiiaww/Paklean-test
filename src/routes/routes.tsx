// routes.tsx
import { createBrowserRouter } from 'react-router-dom';
import ProfilePage from '../pages/ProfilePage';
import EditProfilePage from '../pages/EditProfilePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProfilePage />,
  },
  {
    path: '/edit-profile',
    element: <EditProfilePage />,
  },
]);