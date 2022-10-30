import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts"
import AutoImport from 'unplugin-auto-import/vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

const packageName = 'jlcAdmin'

const entry = path.resolve(__dirname, "./src/index.ts")

const manualChunks = (id) => {
  // 依赖单独打包到vendor.js
  if (id.includes('node_modules')) {
    return 'vendor/index.js'
  }

  // 其余文件保留和src相同的目录结构
  const parsedId = path.parse(id)
  const rootPath = path.resolve()
  const len = rootPath.length
  if (parsedId.dir) {
    const dir = parsedId.dir.substring(len + 5)
    const result = `${dir}/${parsedId.base}`
    return result
  }
}

const globals = {
  vue: 'Vue',
 'element-plus': 'ElementPlus'
}

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['vue'],
      dts: 'src/types/auto-import.d.ts'
    }),
    vue(),
    dts({
      // 输出错误信息
      skipDiagnostics: false,
      logDiagnostics: true,
      // esm和commonjs都生成ts声明文件
      outputDir: ['es', 'lib']
    }),
    // 需要放在dts插件后面，否则打包ts报错，具体原因不明
    VueSetupExtend(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: false,
    assetsDir: 'style',
    lib: {
      entry: entry,
      name: packageName,
      fileName: () => 'index.js',
    },
    rollupOptions: {
      input: entry,
      external: [
        "vue",
        "element-plus",
      ],
      output: [
        {
          globals,
          dir: 'dist',
          format: 'iife',
          name: packageName,
        },
        {
          manualChunks,
          dir: 'es',
          entryFileNames: '[name].js',
          format: 'es'
        },
        {
          manualChunks,
          dir: 'lib',
          entryFileNames: '[name].js',
          format: 'cjs',
        }
      ],
    },
  },
})
