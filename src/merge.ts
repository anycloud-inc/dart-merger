import glob = require("glob");
import fs = require("fs");

interface Options {
  packageName: string;
  src: string;
  out: string;
}

const merge = ({ packageName, src, out }: Options) => {
  const files = glob.sync(src + "/**/*.dart");
  console.log("merging files...");
  console.log(files);

  let imports: string[] = [];
  let buffer = "";

  for (const file of files) {
    let text = fs.readFileSync(file, "utf-8");
    text = text.replace(/^part .*\n/gm, "");
    text = text.replace(/^export .*\n/gm, "");
    text = text.replace(/^import .*\n/gm, (str) => {
      if (
        str.match(/:/) != null && // import 'hoge.dart' のような内部importを除外
        str.match(new RegExp(`package:${packageName}`)) == null &&
        !imports.includes(str)
      ) {
        // 外部packageであれば追加
        imports.push(str);
      }
      return "";
    });
    buffer += text + "\n";
  }

  buffer = imports.join("\n") + "\n" + buffer;

  fs.writeFileSync(out, buffer);

  console.log("successfully merged 🎉");
};

export default merge;
