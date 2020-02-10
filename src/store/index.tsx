import React from 'react';

import AuthStoreProvider from './authStore';

export default function GlobalStore({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
      <AuthStoreProvider>
          {children}
      </AuthStoreProvider>
  );
}