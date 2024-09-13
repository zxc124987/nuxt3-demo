import { d as defineEventHandler } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const GetVerifyList = defineEventHandler(async (event) => {
  const apiUrl = process.env.API_URL;
  const data = await $fetch(`${apiUrl}/VendorInfo/GetVerifyList`);
  return data;
});

export { GetVerifyList as default };
//# sourceMappingURL=GetVerifyList.mjs.map
