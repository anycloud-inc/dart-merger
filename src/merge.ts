import glob = require('glob')
import fs = require('fs')
import path = require('path')

interface Options {
  packageName: string
  src: string
  out: string
}

const merge = ({ packageName, src, out }: Options) => {
  const files = glob.sync(src + '/**/*.dart')
  console.log('merging files...')

  let imports: string[] = []
  let buffer = ''

  for (const file of files) {
    let text = fs.readFileSync(file, 'utf-8')
    text = text.replace(/^part .*\n/gm, '')
    text = text.replace(/^export .*\n/gm, '')
    text = text.replace(/^import .*\n/gm, str => {
      if (
        str.match(/:/) != null && // import 'hoge.dart' のような内部importを除外
        str.match(new RegExp(`package:${packageName}`)) == null &&
        !imports.includes(str)
      ) {
        // 外部packageであれば追加
        imports.push(str)
      }
      return ''
    })
    text = text.replace(/\b[_].+?\b/gm, str => {
      // _で始まるprivateな要素に接頭語をつける
      const fileName = path.basename(file).split('.')[0]
      return '_' + fileName + str
    })
    buffer += text + '\n'
  }

  buffer = imports.join('\n') + '\n' + buffer

  fs.writeFileSync(out, buffer)

  console.log('successfully merged 🎉')
}

export default merge
