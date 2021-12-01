module.exports = () => {
  const [, , firstArg] = process.argv;

  if (!firstArg) {
    console.error("Please pass one argument!!");
    process.exit(1);
  }

  const msg = `
  Hello!! ${firstArg} san.
  I am Toshihisa Tomatsu.
  GitHub: https://github.com/toshi-toma
  Twitter: https://twitter.com/toshi__toma
`;

  console.log(msg);
};
