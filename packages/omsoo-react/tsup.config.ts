import { defineConfig } from "tsup";
import { ScssModulesPlugin } from "esbuild-scss-modules-plugin";

export default defineConfig({
  esbuildPlugins: [ScssModulesPlugin()],
});
