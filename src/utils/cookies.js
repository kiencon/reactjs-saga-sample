import JsCookies from 'js-cookie';

const Cookies = {
  set(key, value) {
    return JsCookies.set(key, value);
  },
  get(key) {
    return JsCookies.get(key);
  },
  remove(key) {
    return JsCookies.remove(key);
  },
};

export default Cookies;
