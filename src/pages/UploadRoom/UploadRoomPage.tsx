import React from 'react';
import {UploadRoomUI} from './ui/UploadRoomUI';
import StoreProvider from './store';

export default class UploadRoomPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StoreProvider>
          <UploadRoomUI/>
        </StoreProvider>
      </React.Fragment>
    );
  }
}
