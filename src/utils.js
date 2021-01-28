const fs = require("fs");
const { Command } = require("commander");
const package = require("../package.json");
const path = require("path");
const cmdPath = path.resolve(__dirname, "../my-cmd.json");

// 读取本地json文件
function getCach() {
  return JSON.parse(fs.readFileSync(cmdPath, "utf8"));
}
function setCach(data) {
  fs.writeFileSync(cmdPath, JSON.stringify(data, "", 2));
}

function getCmdParams() {
  // 命令行参数
  const program = new Command();
  program
    .version(package.version, "-v,--vers", "查看版本")
    .option("-a, --add <name...>", "注册指令 [指令名称 指令脚本语句]")
    .option("-d, --delete <name>", "删除指令 <指令名称>")
    .option("-l, --list", "查看所有已注册指令")
    .option("mc, mc <name>", "执行指令 <指令名称>");
  program.parse(process.argv);
  return [program.args[0], program.opts()];
}

module.exports = {
  getCach,
  setCach,
  getCmdParams,
};
