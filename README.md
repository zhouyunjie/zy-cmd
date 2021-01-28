## 自定义执行命令

---

添加自定义执行命令 简化命令行操作的输入

---

```
  npm i -g zy-cmd           全局安装
  mc -h                     查看帮助
  mc -l                     查看所有已注册命令
  mc -a  cmdName cmdScript  注册命令 cmdName 命令简称 cmdScript 命令语句 语句中有空格或者其他参数请输入字符串
  mc -d  cmdName            删除命令 cmdName 命令简称
  mc cmdName                执行命令 cmdName 命令简称
```

### example：

```
  <!-- 注册 -->
  mc -a lv 'live-server --host=192.168.101.177'

  <!-- 查看 -->
  mc -l

  <!-- 使用 -->
  mc lv

  <!-- 删除 -->
  mc -d lv
```
