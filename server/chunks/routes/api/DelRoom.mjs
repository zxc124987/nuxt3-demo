import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const DelRoom = defineEventHandler(async (event) => {
  const apiUrl = process.env.API_URL;
  const body = await readBody(event);
  const data = await $fetch(`${apiUrl}/ServiceCenter/DelRoom`, {
    method: "POST",
    body: [body]
  });
  return data;
});

export { DelRoom as default };
//# sourceMappingURL=DelRoom.mjs.map
