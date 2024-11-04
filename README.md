# E-commerce SDK

Install: `npm i rashidul-hasan/ecommerce-sdk`

### Usage

Initialize SDk

```js
import { API_URL } from "@/config/config";
import EcommerceSDK from 'ecommerce-sdk';

const sdk = new EcommerceSDK();
sdk.init(`${API_URL}/api/v1`, 'api-secret');
```

Get all settings

```js
const settings = await sdk.settings?.getAllSettings();
```

### Develop locally

```
cd /path/to/lib
yarn link
cd /path/to/project
yarn link myLibName
```
