import { d as defineEventHandler, g as getQuery } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const GetVerifyDetail = defineEventHandler(async (event) => {
  const apiUrl = process.env.API_URL;
  const query = getQuery(event);
  const workNo = query.workNo;
  const data = await $fetch(`${apiUrl}/VendorInfo/GetVerifyDetail?work_no=${workNo}`);
  return data;
});

export { GetVerifyDetail as default };
//# sourceMappingURL=GetVerifyDetail.mjs.map
