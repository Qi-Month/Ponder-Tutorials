# 前言

在上一篇教程中, 我们已经完成了`Ponder`的环境搭建以及依赖配置

从这一篇开始, 我们将正式接触第一个`Ponder Scene`, 并学习`Ponder`的基础结构以及场景注册方式
---

## 搭建第一个场景结构

在正式编写代码之前, 我们需要先了解一个`Ponder`场景由哪些部分组成

一个完整的思索场景通常包含三个部分：首先是用于展示内容的方块结构, 其次是场景中的动画与文字说明, 最后是将该场景与某个物品进行绑定,
使玩家能够通过长按`W`(`或者你配置的其它按键`)进入对应的思索界面

其中, 用于展示的方块结构通常通过游戏内的[结构方块]或者使用[机械动力]中的[蓝图与笔]保存为`.nbt`文件, 并在场景中加载

因此, 在开始编写场景逻辑之前, 我们需要先搭建一个用于展示的结构, 就像下面这样:

![display](/assets/textures/first_scene/display.png)

---

## 获取你的结构文件

[结构方块]保存下来的`.nbt`文件将会存放在`.minecraft/saves/{存档名称}/generated/{命名空间}/structures/`下

命名空间如果不填写默认为`minecraft`

![structure_save](/assets/textures/first_scene/structure_save.png)

而[蓝图与笔]保存的`.nbt`文件则会存放在`.minecraft/schematics`下

![blueprint_save](/assets/textures/first_scene/blueprint_save.png)

---

## 存放你的结构文件

在获取`.nbt`文件后我们将其放在`src/main/resources/assets/{modid}/ponder/`目录下的任意位置

`ponder`目录是`Ponder`寻找场景结构的主要目录, 所有的场景结构都必须放在该目录下

![resources_path](/assets/textures/first_scene/resources_path.png)

---

## 注册和初始化你的Ponder

首先在`src/main/java/{package}/.../`下新建一个`client`包, 随后再在`client`包下新建一个`ponder`包

之所以需要单独创建`client`包, 是因为`Ponder`本质上属于客户端内容, 它包含了场景渲染, 动画播放以及界面展示等仅客户端才会使用的逻辑

将这些代码统一放在`client` 包下, 一方面可以让项目结构更加清晰, 另一方面也能够方便后续区分客户端与服务端代码

在`ponder`包内新建一个`ModPonderPlugin`类, 并实现`PonderPlugin`接口, 随后重下如下方法:

```java
public class ModPonderPlugin implements PonderPlugin {
	/**
	 * 一般在Mod项目主类中拿到
	 * 只需要将`Cmi`修改为你们自己的Mod主类
	 * 下文一样
	 *
	 * @return 注册的Ponder的Modid
	 */
	@Override
	public @NotNull String getModId() {
		return Cmi.MODID;
	}
}
```

![override1](/assets/textures/first_scene/override1.png)

然后我们得在Mod主类的构造函数里注册Ponder, 在里面写上

```java
@Mod(ModMain.MODID)
public class ModMain {
	public static final String MODID = "my_modid";

	public ModMain(FMLJavaModLoadingContext context) {
		PonderIndex.addPlugin(new ModPonderPlugin());
	}
}
```

在完成以上工作后我们就成功将Ponder注册进游戏内了

---

[结构方块]:https://zh.minecraft.wiki/w/结构方块

[机械动力]:https://www.curseforge.com/minecraft/mc-mods/create

[蓝图与笔]:https://www.mcmod.cn/item/347848.html