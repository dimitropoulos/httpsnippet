import { runCustomFixtures } from '../../../fixtures/runCustomFixtures';
import { HarEntry } from '../../../httpsnippet';

runCustomFixtures({
  targetId: 'nice',
  clientId: 'rest',
  tests: [
    {
      it: 'should generate a minimal example',
      input: {
        log: {
          version: '1.2',
          creator: {
            name: 'Insomnia REST Client',
            version: 'insomnia.desktop.app:v2022.4.0-beta.2',
          },
          entries: [
            {
              // @ts-expect-error TODO
              startedDateTime: '2022-05-31T14:45:07.102Z',
              time: 0,
              request: {
                method: 'POST',
                url: 'http://nice.mycompany.com/',
                httpVersion: 'HTTP/1.1',
                cookies: [],
                headers: [
                  { name: 'grant_type', value: 'password' },
                  { name: 'username', value: 'Grendel.Cainson' },
                  { name: 'password', value: 'MadeUpPassword' },
                ],
                queryString: [],
                postData: {
                  mimeType: 'application/json',
                  text: '{\n\t"somedata": 123\n}',
                  params: [],
                },
                headersSize: -1,
                bodySize: -1,
                settingEncodeUrl: true,
              },
              response: {
                status: 0,
                statusText: '',
                httpVersion: 'HTTP/1.1',
                cookies: [],
                headers: [],
                content: {
                  size: 0,
                  mimeType: '',
                },
                redirectURL: '',
                headersSize: -1,
                bodySize: -1,
              },
              cache: {},
              timings: {
                blocked: -1,
                dns: -1,
                connect: -1,
                send: 0,
                wait: 0,
                receive: 0,
                ssl: -1,
              },
              comment: 'My Request',
            },
          ],
        },
      } as HarEntry,
      options: {},
      expected: 'first-try',
    },
  ],
});
