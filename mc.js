#!/usr/bin/env node
const { getCach, setCach, getCmdParams } = require("./src/utils.js");
const shell = require("shelljs");
const allCmds = getCach();
const [cmdKey, options] = getCmdParams();
// 没有指定参数命令的话就是要执行指定命令
if (JSON.stringify(options) == "{}") {
  let cmd = allCmds[cmdKey];
  cmd ? shell.exec(cmd) : console.log("尚未注册该命令");
} else {
  // 添加指令
  if (options.add) {
    if (options.add.length < 2) {
      console.log("请输入将要添加的指令和脚本语句");
      return;
    }
    let [cmd, script] = options.add;
    allCmds[cmd] = script;
    setCach(allCmds);
  }
  // 删除
  if (options.delete) {
    let cmd = options.delete;
    allCmds[cmd] ? delete allCmds[cmd] : console.log("尚未注册该命令");
    setCach(allCmds);
  }
  // 查看所有已注册指令
  if (options.list) {
    let arr = Object.keys(allCmds).map((key) => {
      return { cmd: key, script: allCmds[key] };
    });
    console.table(arr);
  }
}
