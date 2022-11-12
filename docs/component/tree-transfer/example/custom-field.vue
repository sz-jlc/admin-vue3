<template>
  <jlc-tree-transfer :data="data" :props="props" />
</template>

<script setup lang='ts'>
import { JlcTreeTransfer } from '@sz-jlc/admin-vue3'

const props = {
  children: 'subTree',
  id: 'uid',
  label: 'title'
}

const data = [
  {
    title: "Level one 1",
    uid: 1,
    subTree: [
      {
        title: "Level two 1-1",
        uid: 2,
        subTree: [
          {
            title: "Level three 1-1-1",
            uid: 3,
          },
        ],
      },
    ],
  },
  {
    title: "Level one 2",
    uid: 4,
    subTree: [
      {
        title: "Level two 2-1",
        uid: 5,
        subTree: [
          {
            title: "Level three 2-1-1",
            uid: 6,
          },
        ],
      },
      {
        title: "Level two 2-2",
        uid: 7,
        subTree: [
          {
            title: "Level three 2-2-1",
            uid: 8,
          },
        ],
      },
    ],
  },
  {
    title: "Level one 3",
    uid: 9,
    subTree: [
      {
        title: "Level two 3-1",
        uid: 10,
        subTree: [
          {
            title: "Level three 3-1-1",
            uid: 11,
          },
        ],
      },
      {
        title: "Level two 3-2",
        uid: 12,
        subTree: [
          {
            title: "Level three 3-2-1",
            uid: 13,
          },
        ],
      },
    ],
  },
]
</script>
