import { createAsyncThunk } from '@reduxjs/toolkit';
import { setFiles } from '../../slices/files/files';
// @ts-ignore
import { readFile } from '../../../utils/read-file';

export const readFiles = createAsyncThunk('files/readFiles', async (files: FileList, { dispatch }) => {
  const promises = [];

  for (const element of files) {
    const file = element;
    promises.push(readFile(file));
  }

  const userFiles = await Promise.all(promises);
  dispatch(setFiles(userFiles));
});
