/**
 * This is a simple library to work with cookies like with localStorage.
 *
 * Author: Mathieu LALLEMAND
 */
export const cookiesStorage = {

  setItem(key, value="", days=1) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    document.cookie = `${key}=${value}; expires=${date.toUTCString()}; path=/`;
  },

  getItem(key) {
    const cookies = document.cookie.split(';');
    const result  = cookies.find(str => str.substring(0,key.length + 1) == `${key}=`);
    if (result) {
      const firstSplit = result.indexOf('=') + 1;
      return result.substring(firstSplit);
    }
    return null;
  },

  removeItem(key) {
    document.cookie = `${key}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  }

}
