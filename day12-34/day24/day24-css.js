const recast = require("recast")

// 你的"机器"——一段代码
// 我们使用了很奇怪格式的代码，想测试是否能维持代码结构
const code =
  `
  function add(a, b) {
    return a +
      // 有什么奇怪的东西混进来了
      b
  }
  `
// 用螺丝刀解析机器
const ast = recast.parse(code);

// ast可以处理很巨大的代码文件
// 但我们现在只需要代码块的第一个body，即add函数
const add  = ast.program.body[0]

console.log(add)
// 输出：
// FunctionDeclaration {
//     type: 'FunctionDeclaration',
//     id:
//      Identifier {
//        type: 'Identifier',
//        name: 'add',
//        loc:
//         { start: [Object],
//           end: [Object],
//           lines: [Object],
//           tokens: [Array],
//           indent: 2 } },
//     params:
//      [ Identifier { type: 'Identifier', name: 'a', loc: [Object] },
//        Identifier { type: 'Identifier', name: 'b', loc: [Object] } ],
//     body:
//      BlockStatement {
//        type: 'BlockStatement',
//        body: [ [Object] ],
//        loc:
//         { start: [Object],
//           end: [Object],
//           lines: [Object],
//           tokens: [Array],
//           indent: 2 } },
//     generator: false,
//     expression: false,
//     async: false,
//     loc:
//      { start: { line: 2, column: 2, token: 0 },
//        end: { line: 6, column: 3, token: 13 },
//        lines:
//         Lines {
//           infos: [Array],
//           mappings: [],
//           cachedSourceMap: null,
//           cachedTabWidth: undefined,
//           length: 7,
//           name: null },
//        tokens:
//         [ [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object] ],
//        indent: 2 }
//  }