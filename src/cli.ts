#!/usr/bin/env node
import cac from "cac";
import merge from "./merge";

const cli = cac();
cli.option("--package <packageName>", "Provide package name", {
  default: "example",
});
cli.option("--src <folderPath>", "Provide source directory", { default: "." });
cli.option("--out <filePath>", "Provide file path of output", {
  default: "out.dart",
});

cli.help();
cli.showHelpOnExit = true;

const parsed = cli.parse();

console.log("-------------");
console.log(parsed);
console.log("-------------");

if (parsed.options.help) {
  process.exit(0);
}

merge({
  packageName: parsed.options.package,
  src: process.cwd() + "/" + parsed.options.src,
  out: process.cwd() + "/" + parsed.options.out,
});
