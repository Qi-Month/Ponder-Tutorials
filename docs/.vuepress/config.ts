import {viteBundler} from "@vuepress/bundler-vite"
import {defineUserConfig} from "vuepress"
import {plumeTheme} from "vuepress-theme-plume"

export default defineUserConfig({
	base: "/Ponder-Tutorials/",
	lang: "zh-CN",
	title: "Ponder-Tutorials",
	description: "Ponder-Tutorials",
	head: [
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				href: "/Ponder-Tutorials/assets/textures/icon.png"
			}
		]
	],
	bundler: viteBundler(),
	theme: plumeTheme({
		navbar: [
			{
				text: "首页",
				link: "/"
			}
		]
	})
})