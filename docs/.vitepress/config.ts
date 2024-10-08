/*
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-10-08 09:03:50
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-10-08 19:33:56
 * @FilePath: \vue3-ts-docs\docs\.vitepress\config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: "Vue 3 + TypeScript 学习文档",
    description: "详细学习Vue 3 和 TypeScript 的指南",
    themeConfig: {
        siteTitle: "前端学习",
        logo: "/assets/logo.jpg",
        nav: [
            { text: "首页", link: "/"},
            { text: "指南", link: "/guide/"},
            { text: "组件", link: "/components/"},
            { text: "API 参考", link: "/api/"},
            { text: "常见问题", link: "/faq/"},
        ],
        socialLinks: [
            {icon: "github", link: "https://vue3-ts-docs-gamma.vercel.app/"},
        ],
        sidebar: {
            "/guide/": [
                {
                    text: "开始",
                    collapsible: true,
                    items: [
                        {text: "介绍", link: "/guide/"},
                        {text: "安装", link: "/guide/installation"},
                        {text: "基本概念", link: "/guide/concepts"},
                    ],
                },
            ],
            "/components/": [
                {
                    text: "常用组件",
                    items: [
                        {text: "介绍", link: "/components/"},
                        {text: "按钮 Button", link: "/components/button"},
                        {text: "表单 Form", link: "/components/form"},
                        {text: "表格 Table", link: "/components/table"},
                    ],
                },
            ],
        },
        footer: {
            message: "用心学习 Vue 3 和 TypeScript",
            copyright: "Copyright© 2024 mqxu",
          },
    }
})
