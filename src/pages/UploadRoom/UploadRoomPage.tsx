import React from 'react';
import { UploadRoomUI } from './ui/UploadRoomUI';
import StoreProvider from './store';

export default function UploadRoomPage(): React.ReactElement {
  return (
    <React.Fragment>
      <StoreProvider>
        <UploadRoomUI />
      </StoreProvider>
    </React.Fragment>
  );
}
