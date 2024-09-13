import { d as defineEventHandler } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const logout = defineEventHandler(async (event) => {
  const apiUrl = process.env.API_URL;
  const data = await $fetch(`${apiUrl}/Login/Logout`);
  return data;
});

export { logout as default };
//# sourceMappingURL=logout.mjs.map
