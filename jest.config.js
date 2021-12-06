/*
 * @Description:
 * @version:
 * @Author: AlexYuan
 * @Date: 2021-12-02 17:31:11
 * @LastEditors: you
 * @LastEditTime: 2021-12-03 17:34:15
 */
module.exports = {
  moduleFileExtensions: ['vue', 'js', 'ts'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // transform: {
  //   '^.+\\.vue$': 'vue-jest', // vue 文件用 vue-jest 转换
  //   '^.+\\.tsx$': 'ts-jest', // ts 文件用 ts-jest 转换
  //   '^.+.[j]s?$': 'babel-jest'
  // },
  transform: {
    '^.+.[j|t]sx?$': 'babel-jest',
    '^.+.vue?$': 'vue-jest',
    '^.+.tsx$': 'ts-jest'
  },
  // 匹配 __tests__ 目录下的 .js/.ts 文件 或其他目录下的 xx.test.js/ts xx.spec.js/ts
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)$',
  collectCoverageFrom: ['src/components/**/*.vue']
}
