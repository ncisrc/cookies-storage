# Cookies Storage

Have you ever dreamed to use Cookies like you use LocalStorage ? hum?
And If I say that this lib is very light ? hum ?

Happy Cookie Storage !

## Install
```bash
npm i @ncisrc/cookies-storage
```
## Use
```javascript
import { cookiesStorage } from "cookies-storage"

cookieStorage.setItem(key, value, options)
const value = cookieStorage.getItem(key);

```

## Options

### Default 'options' values
```javascript
options = {
  maxAge   : 36288000, // 7 days
  sameSite : 'Strict',
  path     : '/',
  secure   : true,
  httpOnly : false,
}
```

You'll find more about theses options in this page :
Français : https://developer.mozilla.org/fr/docs/Web/HTTP/Headers/Set-Cookie
English  : https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie

