import { CodeBuilder } from '../../../helpers/code-builder';
import { Client } from '../../targets';

export const rest: Client = {
  info: {
    key: 'rest',
    title: 'Rest Proxy',
    link: 'https://developer.niceincontact.com',
    description: 'Nice client',
  },
  convert: ({ allHeaders, method }, options) => {
    const { push, blank, join } = new CodeBuilder();

    push('DYNAMIC TokenInput');
    blank();

    Object.keys(allHeaders).forEach(header => {
      push(`TokenInput.${header} = "${allHeaders[header]}"`);
    });
    blank();

    push('TokenJsonInput = "{TokenInput.asjson()}"');
    blank();

    push('ASSIGN proxy = GETRESTProxy()');
    blank();

    push(
      `ASSIGN TokenResponse = proxy.MakeRestRequest(TokenRequestURL,TokenJsonInput, 0, "${method}")`,
    );

    return join();
  },
};
