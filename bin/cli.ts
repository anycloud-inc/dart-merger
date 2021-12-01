#!/usr/bin/env node
require("ts-node").register();
import cac from "cac";
import merge from "../src/merge";

const cli = cac();
cli.help();

merge({
  packageName: "example",
  src: process.cwd() + "/example/lib",
  out: process.cwd() + "/example/out/out.dart",
});
