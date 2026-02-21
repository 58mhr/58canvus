import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import security from 'eslint-plugin-security';
import sonarjs from 'eslint-plugin-sonarjs';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  {
    plugins: {
      import: importPlugin,
      security,
      sonarjs,
    },
    rules: {
      // 未使用の変数を禁止してコードを整理する。
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      // var を禁止し let/const を使う。
      'no-var': 'error',
      // let の使用は警告（基本は const を推奨）。
      'no-restricted-syntax': [
        'warn',
        {
          selector: "VariableDeclaration[kind='let']",
          message: 'let の使用は避け、可能なら const を使ってください。',
        },
      ],
      // 再代入しない変数は const を強制。
      'prefer-const': 'error',
      // debugger の使用を禁止。
      'no-debugger': 'error',
      // 明示的な any を禁止。
      '@typescript-eslint/no-explicit-any': 'error',
      // 型アサーション（"as" を含む）をすべて禁止。
      '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'never' }],
      // React: JSX の boolean 属性は省略記法を許可しない。
      'react/jsx-boolean-value': ['error', 'always'],
      // React: JSX 内の中括弧は不要なら削除する。
      'react/jsx-curly-brace-presence': ['error', 'never'],
      // React: JSX の props をアルファベット順に並べる。
      'react/jsx-sort-props': [
        'warn',
        { callbacksLast: true, shorthandFirst: true, reservedFirst: true },
      ],
      // React: 連続した JSX 要素にはフラグメントを使う。
      'react/jsx-no-useless-fragment': 'error',
      // React Hooks: 依存配列の漏れを検知する。
      'react-hooks/exhaustive-deps': 'warn',
      // import: 同一 import の重複を禁止する。
      'import/no-duplicates': 'error',
      // import: import を並び替え、空行なしを強制する。
      'import/order': [
        'warn',
        {
          'newlines-between': 'never',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      // import: export のミュータブル指定を禁止する。
      'import/no-mutable-exports': 'error',
      // sonarjs: 認知的複雑度が高い関数を警告する。
      'sonarjs/cognitive-complexity': ['warn', 20],
      // sonarjs: 同一ロジックの関数重複を警告する。
      'sonarjs/no-identical-functions': 'warn',
      // sonarjs: 似た内容の分岐（条件）の重複を警告する。
      'sonarjs/no-duplicated-branches': 'warn',
      // security: 動的プロパティアクセスのリスクを警告する。
      'security/detect-object-injection': 'warn',
      // 型のみの import は type import に統一する。
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      // 同一モジュールからの重複 import を禁止する。
      'no-duplicate-imports': 'error',
      // == を禁止し === を強制する。
      eqeqeq: ['error', 'always'],
      // 暗黙の型変換（+str、!!val など）を禁止する。
      'no-implicit-coercion': 'error',
    },
  },
  {
    files: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
    plugins: {
      // eslint-plugin-jest をテストファイルに適用する。
      jest,
    },
    rules: {
      // Jest: .only の付いたテストを禁止する。
      'jest/no-focused-tests': 'error',
      // Jest: 無効化されたテストを警告する。
      'jest/no-disabled-tests': 'warn',
      // Jest: expect のないテストを警告する。
      'jest/expect-expect': 'warn',
    },
  },
  prettier,
]);

export default eslintConfig;
