# 前言

在上一篇教程中, 我们已经了解了 `Ponder` 的作用, 以及开始学习前需要完成的准备工作

接下来, 我们将正式进入 `Ponder` 的学习阶段

---

## 环境搭建

在Mod项目根目录的`build.gradle`文件中找到`repositories`字段, 添加以下内容:

```groovy
groovy {
	maven {
		url = "https://raw.githubusercontent.com/Fuzss/modresources/main/maven/"
	}
	maven {
		url = "https://maven.createmod.net"
	}
}
```

![repositories](/assets/textures/environment_setup/repositories.png)

随后在`build.gradle`的`dependencies`字段内添加以下内容:

```groovy
dependencies {
	implementation fg.deobf("net.createmod.ponder:Ponder-Forge-${minecraft_version}:${ponder_version}")
	compileOnly fg.deobf("dev.engine-room.flywheel:flywheel-forge-api-${minecraft_version}:${flywheel_version}")
	runtimeOnly fg.deobf("dev.engine-room.flywheel:flywheel-forge-${minecraft_version}:${flywheel_version}")
}
```

![dependencies](/assets/textures/environment_setup/dependencies.png)

随后在`gradle.properties`中添加`ponder_version`和`flywheel_version`字段, 并且根据[Ponder-Maven]和[Flywheel-Maven]设置其值

```properties
ponder_version=1.0.91
flywheel_version=1.0.5
```

![properties](/assets/textures/environment_setup/properties.png)

最后刷新`Gradle`, 引入`Ponder`和`Flywheel`的依赖, 并且等待依赖下载解析完毕

---

# [下一篇](./first_scene)

[Ponder-Maven]:https://ci.createmod.net/job/createmod/job/Ponder/job/mc1.20.1%252Fdev/

[Flywheel-Maven]:https://maven.createmod.net/dev/engine-room/flywheel/