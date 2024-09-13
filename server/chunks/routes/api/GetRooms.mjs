import { d as defineEventHandler } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const GetRooms = defineEventHandler(async (event) => {
  const apiUrl = process.env.API_URL;
  const data = await $fetch(`${apiUrl}/ServiceCenter/GetRooms`);
  return data;
});

export { GetRooms as default };
//# sourceMappingURL=GetRooms.mjs.map
