import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const AddRoom = defineEventHandler(async (event) => {
  const apiUrl = process.env.API_URL;
  const body = await readBody(event);
  const data = await $fetch(`${apiUrl}/ServiceCenter/AddRoom`, {
    method: "POST",
    body
  });
  return data;
});

export { AddRoom as default };
//# sourceMappingURL=AddRoom.mjs.map
