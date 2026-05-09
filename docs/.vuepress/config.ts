import {viteBundler} from "@vuepress/bundler-vite"
import {defineUserConfig} from "vuepress"
import {plumeTheme} from "vuepress-theme-plume"

export default defineUserConfig({
	base: "/Ponder-Tutorials/",
	lang: "zh-CN",
	title: "Ponder-Tutorials",
	description: "Ponder-Tutorials",
	locales: {
		"/": {
			lang: "zh-CN",
			title: "Ponder-Tutorials",
			description: "中文描述",
		},
		"/en/": {
			lang: "en-US",
			title: "Ponder-Tutorials",
			description: "英文描述",
		}
	},
	head: [
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				href: "/assets/textures/icon.png"
			}
		]
	],

	bundler: viteBundler(),
	theme: plumeTheme({
		locales: {
			"/": {
				navbar: [
					{
						text: "首页",
						link: "/"
					},
					{
						text: "介绍",
						link: "/introduction.html"
					}
				]
			},
			"/en/": {
				navbar: [
					{
						text: "Home",
						link: "/en/"
					},
					{
						text: "Get Started",
						link: "/en/get-started.html"
					}
				]
			}
		},
		search: {
			provider: "local",
		}
	})
})