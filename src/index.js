/**
 * This is a simple library to work with cookies like with localStorage.
 *
 * Author: Mathieu LALLEMAND
 */
export const cookiesStorage = {

  setItem(key, value="", options) {
    const cookieString = `${key}=${value}` + getOptionsString(options);
    console.log(cookieString);
    document.cookie = cookieString;
  },

  getItem(key) {
    const cookies = document.cookie.split(';').map(keyValue => keyValue.trim());
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

/**
 * Return the default option string according to the given options
 * @param {object} options
 * @returns string
 */
function getOptionsString(options) {
  let str = "; ";
  options = defaultOptions(options);
  if (options.maxAge)   str += `Max-Age=${options.maxAge}; `;
  if (options.sameSite) str += `SameSite=${options.sameSite}; `;
  if (options.path)     str += `Path=${options.path}; `;
  if (options.secure)   str += `Secure; `;
  if (options.httpOnly) str += `HttpOnly; `;
  if (options.domain)   str += `Domain=${options.domain}; `;
  return str;
}

/**
 * Set the default options if missing
 * @param {object} options
 * @returns object
 */
function defaultOptions(options) {
  const defaultOptions = {
      maxAge   : 604800,       // 7 Days
      sameSite : 'Strict',     // Strict
      path     : '/',          // Only root
      secure   : true,         // Only HTTPS
      httpOnly : false,        // Allow javascript to read Cookies
      domain   : null          // Localdomain only
    };

  if (!options) return defaultOptions;

  if (!options.hasOwnProperty('maxAge'))   options.maxAge   = defaultOptions.maxAge;
  if (!options.hasOwnProperty('sameSite')) options.sameSite = defaultOptions.sameSite;
  if (!options.hasOwnProperty('path'))     options.path     = defaultOptions.path;
  if (!options.hasOwnProperty('secure'))   options.secure   = defaultOptions.secure;
  if (!options.hasOwnProperty('httpOnly')) options.domain   = defaultOptions.httpOnly;
  if (!options.hasOwnProperty('domain'))   options.domain   = defaultOptions.domain;

  return options;
}
