import { convertType } from './helpers';

describe('ruby', () => {
  describe('convertType', () => {
    it('handles strings', () => {
      expect(convertType('ziltoid')).toBe("'ziltoid'");
      expect(convertType('ziltoid\nthe\nomniscient')).toBe("'ziltoid\nthe\nomniscient'");

      expect(convertType("esca'pe")).toBe("'esca'pe'");
    });

    it('handles numbers', () => {
      expect(convertType(1337)).toBe('1337');
      expect(convertType(3.14)).toBe('3.14');
      expect(convertType(Infinity)).toBe('Infinity');
      expect(convertType(-0)).toBe('0');
      expect(convertType(NaN)).toBe('NaN');
    });

    it('handles booleans', () => {
      expect(convertType(true)).toBe('true');
      expect(convertType(false)).toBe('false');
    });

    it('handles null', () => {
      expect(convertType(null)).toBe('null');
      expect(convertType(undefined)).toBe('null');
    });

    it('handles arrays', () => {
      expect(convertType([1, 2, 3])).toBe('[\n1,\n2,\n3\n]');
      expect(convertType([1, 'two', 3])).toBe("[\n1,\n'two',\n3\n]");
    });

    it('handles objects', () => {
      expect(convertType({ a: 1 })).toBe(`{\n'a' => 1\n}`);
      expect(convertType({ b: '', c: true })).toBe(`{\n'b' => '',\n'c' => true\n}`);
    });

    it('handles complex nested structures', () => {
      const input = {
        number: 1,
        string: 'f"oo',
        arr: [1, 2, 3],
        nested: {
          a: 'b',
        },
        arr_mix: [
          1,
          'a',
          {
            arr_mix_nested: {},
          },
        ],
        boolean: false,
      };

      const output = convertType(input, '  ');

      expect(output).toBe(`{
  'number' => 1,
  'string' => 'f"oo',
  'arr' => [
    1,
    2,
    3
  ],
  'nested' => {
    'a' => 'b'
  },
  'arr_mix' => [
    1,
    'a',
    {
        'arr_mix_nested' => {
                
        }
    }
  ],
  'boolean' => false
}`);
    });
  });
});
