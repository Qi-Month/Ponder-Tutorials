import { CodeTabs } from "D:/.minecraft/project/docs/Ponder-Tutorials/node_modules/.pnpm/@vuepress+plugin-markdown-t_936bd75762f8ad750eab0c191315d10c/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/.minecraft/project/docs/Ponder-Tutorials/node_modules/.pnpm/@vuepress+plugin-markdown-t_936bd75762f8ad750eab0c191315d10c/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/.minecraft/project/docs/Ponder-Tutorials/node_modules/.pnpm/@vuepress+plugin-markdown-t_936bd75762f8ad750eab0c191315d10c/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
