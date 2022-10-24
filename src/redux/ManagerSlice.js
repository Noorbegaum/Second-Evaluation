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
    notes: 'Twitter Notes',
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
    filterValue: initialState,
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
      state.filterValue.push(action.payload);
    },
    deleteSite: (state, action) => {
      state.value = state.value.filter(sitedata => sitedata.id !== action.payload.id);
      state.value = state.filterValue.filter(sitedata => sitedata.id !== action.payload.id);
    },
    edit: (state, action) => {
      state.value.map(sitedata => {
        if (sitedata.id === action.payload.id) {
          sitedata.sitename = action.payload.sitename;
          sitedata.url = action.payload.url;
          sitedata.password = action.payload.password;
          sitedata.folder = action.payload.folder;
          sitedata.username = action.payload.username;
          sitedata.notes = action.payload.notes;
        }
      });
    },
    filter: (state, action) => {
      state.value = state.filterValue.filter(site =>
        site.sitename.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },

  },
});

export const {add, edit,filter,deleteSite} = ManagerSlice.actions;

export default ManagerSlice.reducer;
