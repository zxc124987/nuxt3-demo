import { d as defineEventHandler } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const login = defineEventHandler(async (event) => {
  const apiUrl = process.env.API_URL;
  const data = await $fetch(`${apiUrl}/Login/Validate`);
  return data;
});

export { login as default };
//# sourceMappingURL=login.mjs.map
