import {viteBundler} from "@vuepress/bundler-vite"
import {defineUserConfig} from "vuepress"
import {plumeTheme} from "vuepress-theme-plume"

export default defineUserConfig({
	base: "/Ponder-Tutorials/",
	lang: "zh-CN",
	title: "Ponder-Tutorials",
	description: "Ponder-Tutorials",

	bundler: viteBundler(),
	theme: plumeTheme({
	}),
})