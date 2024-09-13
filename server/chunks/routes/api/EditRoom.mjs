import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const EditRoom = defineEventHandler(async (event) => {
  const apiUrl = process.env.API_URL;
  const body = await readBody(event);
  const data = await $fetch(`${apiUrl}/ServiceCenter/UpdRoom`, {
    method: "POST",
    body
  });
  return data;
});

export { EditRoom as default };
//# sourceMappingURL=EditRoom.mjs.map
