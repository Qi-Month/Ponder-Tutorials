import {defineThemeConfig} from "vuepress-theme-plume"

export default defineThemeConfig({
	logo: "/assets/textures/icon.png",
	appearance: true,
	navbar: [
		{
			text: "首页",
			link: "/"
		},
		{
			text: "快速开始",
			link: "/introduction.html"
		}
	],
	navbarSocialInclude: [],
	aside: true,
	outline: [2, 6],
	copyright: true,
	prevPage: true,
	nextPage: true,
	createTime: true,
	footer: {
		message: "Power by <a target='_blank' href='https://v2.vuepress.vuejs.org/'>VuePress</a> & <a target='_blank' href='https://theme-plume.vuejs.press'>vuepress-theme-plume</a>",
		copyright: "Copyright © 2026-present Ponder-Tutorials",
	},
	profile: {
		avatar: "/assets/textures/icon.png",
		name: "Ponder-Tutorials",
		description: "Ponder-Tutorials",
		circle: true
	},
	// collections,
	/**
	 * 公告板
	 * @see https://theme-plume.vuejs.press/guide/features/bulletin/
	 */
	// bulletin: {
	//   layout: 'top-right',
	//   contentType: 'markdown',
	//   title: '公告板标题',
	//   content: '公告板内容',
	// },

	/* 过渡动画 @see https://theme-plume.vuejs.press/config/theme/#transition */
	transition: {
		//   page: true,        // 启用 页面间跳转过渡动画
		//   postList: true,    // 启用 博客文章列表过渡动画
		// 深色模式切换过渡动画, 或配置过渡动画类型
		appearance: "circle-clip",
	}
})
