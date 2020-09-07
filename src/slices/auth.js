const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: '',
    username: '',
    isAuthenticated: '',
    permissions: [],
  },
  reducers: {},
});

export default authSlice.reducer;
