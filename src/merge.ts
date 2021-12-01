import glob = require("glob");
import fs = require("fs");

interface Options {
  packageName: string;
  src: string;
  out: string;
}

const merge = ({ packageName, src, out }: Options) => {
  const files = glob.sync(src + "/**/*.dart");
  console.log(files);

  let imports: string[] = [];
  let buffer = "";

  for (const file of files) {
    let text = fs.readFileSync(file, "utf-8");
    text = text.replace(/^part .*\n$/m, "");
    text = text.replace(/^import .*\n$/m, (str) => {
      if (str.match(new RegExp(`package:${packageName}`)) == null) {
        // 外部packageであれば追加
        imports.push(str);
      }
      return "";
    });
    buffer += text + "\n";
  }

  buffer = imports.join("\n") + "\n" + buffer;

  fs.writeFileSync(out, buffer);

  console.log("imports");
  console.log(imports);

  console.log("successfully merged 🎉");
};

export default merge;
