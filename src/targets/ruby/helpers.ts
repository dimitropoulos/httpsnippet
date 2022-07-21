export const convertType = (input: any[] | any, indent?: string, lastIndent?: string) => {
  lastIndent = lastIndent || '';
  indent = indent || '';

  switch (Object.prototype.toString.call(input)) {
    case '[object Boolean]':
      return String(input);

    case '[object Null]':
      return 'null';

    case '[object Undefined]':
      return 'null';

    case '[object String]':
      return `'${input.replace(/\\/g, '\\\\').replace(/'/g, "'")}'`;

    case '[object Number]':
      return input.toString();

    case '[object Array]': {
      const contents = input
        .map((item: any) => convertType(item, `${indent}${indent}`, indent))
        .join(`,\n${indent}`);
      return `[\n${indent}${contents}\n${lastIndent}]`;
    }

    case '[object Object]': {
      const result: string[] = [];
      for (const i in input) {
        if (Object.prototype.hasOwnProperty.call(input, i)) {
          result.push(
            `${convertType(i, indent)} => ${convertType(input[i], `${indent}${indent}`, indent)}`,
          );
        }
      }
      return `{\n${indent}${result.join(`,\n${indent}`)}\n${lastIndent}}`;
    }

    default:
      return 'null';
  }
};
