import type { Plugin } from 'vue'

type SFCWithInstall<T> = T & Plugin

// const withInstall = <T>(comp: T) => {
//     (comp as SFCWithInstall<T>).install = (app: App) => {
//         //注册组件
//         app.component((comp as any).name, comp as any)
//     }
//     return comp as SFCWithInstall<T>
// }

export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E
) => {
  ;(main as SFCWithInstall<T>).install = (app): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp)
    }
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      ;(main as any)[key] = comp
    }
  }
  return main as SFCWithInstall<T> & E
}

export default withInstall
