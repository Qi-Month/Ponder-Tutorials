import { GitContributors } from "D:/.minecraft/project/docs/Ponder-Tutorials/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_2be47034035e7a3f1e96fcdbdb5aa525/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "D:/.minecraft/project/docs/Ponder-Tutorials/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_2be47034035e7a3f1e96fcdbdb5aa525/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
