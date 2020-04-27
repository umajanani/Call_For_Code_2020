import {ApplicationConfig} from '@loopback/core';
import {EducationAppApplication} from './application';

export {EducationAppApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new EducationAppApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/educationapp`);

  return app;
}
