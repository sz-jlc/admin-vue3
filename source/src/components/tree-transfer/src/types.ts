import type { ElTree } from 'element-plus'

type ElTreeType = InstanceType<typeof ElTree>

type ElTreeProps = ElTreeType['$props']['props']

export type Props = Partial<
  {
    id: string
    parentId: string
    label: string
  } & ElTreeProps
>
