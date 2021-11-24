import { $axios } from '../../../utils';

export const login = (email, password) => $axios.post('https://msapi.survivalapp.com/user-activity/account/login', {
  userEmail: email, password,
});
