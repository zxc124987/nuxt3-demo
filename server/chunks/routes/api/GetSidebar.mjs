import { d as defineEventHandler } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const GetSidebar = defineEventHandler(async (event) => {
  const apiUrl = process.env.API_URL;
  const data = await $fetch(`${apiUrl}/Login/QrySideBar`);
  return data;
});

export { GetSidebar as default };
//# sourceMappingURL=GetSidebar.mjs.map
