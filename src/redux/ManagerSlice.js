import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    sitename: 'Facebook',
    key: 'Facebook',
    source: require('../assets/images/Bitmap.png'),
    url: 'www.facebook.com',
    notes: 'Facebook Notes',
    username: 'xyz',
    password: '12345',
    folder: 'Social Media',
  },
  {
    id: 2,
    sitename: 'YouTube',
    key: 'YouTube',
    source: require('../assets/images/YouTube.png'),
    url: 'www.youtube.com/ssmraok',
    notes: 'Youtube Notes',
    username: 'xyz',
    password: '12345',
    folder: 'Social Media',
  },
  {
    id: 3,
    sitename: 'Twitter',
    key: 'Twitter',
    source: require('../assets/images/Twitter.png'),
    url: 'www.twitter.com',
    notes: 'Facebook Notes',
    username: 'xyz',
    password: '12345',
    folder: 'Social Media',
  },
  {
    id: 4,
    sitename: 'Instagram',
    key: 'Instagram',
    source: require('../assets/images/Insta.png'),
    url: 'www.instagram.com',
    notes: 'Instagram Notes',
    username: 'xyz',
    password: '12345',
    folder: 'Social Media',
  },
];

export const ManagerSlice = createSlice({
  name: 'sitedata',
  initialState: {
    value: initialState,
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    edit: (state, action) => {
      state.value.map(sitedata => {
        if (sitedata.id=== action.payload.id) {
          sitedata.sitename = action.payload.sitename;
          sitedata.url = action.payload.url;
          sitedata.password = action.payload.password;
          sitedata.folder = action.payload.folder;
          sitedata.username = action.payload.username;
          sitedata.notes = action.payload.notes;
        }
      });
    },
  },
});

export const {add, edit} = ManagerSlice.actions;

export default ManagerSlice.reducer;
