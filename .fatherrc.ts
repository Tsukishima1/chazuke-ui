export default {
  target: 'node', // 类型：默认为browser
  entry: 'src/index.ts', // 入口文件
  cssModules: false, // 是否开启cssModules
  extractCSS: false, // 是否提取css为单独文件
  cjs: 'rollup', // cjs格式
  esm: 'rollup', // ems格式
  lessInBabelMode: true, // bable模式下less编译,
  extraBabelPresets:[],
  extraBabelPlugins:[] // 配置babel用，具体可查看文档
}
