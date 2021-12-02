#!/usr/bin/env node
import cac from 'cac'
import merge from './merge'

const cli = cac()
cli.option('--package <packageName>', 'Provide package name')
cli.option('--src <folderPath>', 'Provide source directory', { default: '.' })
cli.option('--out <filePath>', 'Provide file path of output', {
  default: 'out.dart',
})

cli.help()

const parsed = cli.parse()

if (parsed.options.help) {
  process.exit(0)
}

if (parsed.options.package == null) {
  console.log('Error: --package parameter required\n')
  cli.outputHelp()
  process.exit(1)
}

merge({
  packageName: parsed.options.package,
  src: process.cwd() + '/' + parsed.options.src,
  out: process.cwd() + '/' + parsed.options.out,
})
