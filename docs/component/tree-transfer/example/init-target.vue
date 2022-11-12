<template>
  <jlc-tree-transfer :data="data" :target-ids="targetIds"/>
</template>

<script setup lang='ts'>
import { JlcTreeTransfer } from '@sz-jlc/admin-vue3'

const data = [
  {
    label: "Level one 1",
    id: 1,
    children: [
      {
        label: "Level two 1-1",
        id: 2,
        children: [
          {
            label: "Level three 1-1-1",
            id: 3,
          },
        ],
      },
    ],
  },
  {
    label: "Level one 2",
    id: 4,
    children: [
      {
        label: "Level two 2-1",
        id: 5,
        children: [
          {
            label: "Level three 2-1-1",
            id: 6,
          },
        ],
      },
      {
        label: "Level two 2-2",
        id: 7,
        children: [
          {
            label: "Level three 2-2-1",
            id: 8,
          },
        ],
      },
    ],
  },
  {
    label: "Level one 3",
    id: 9,
    children: [
      {
        label: "Level two 3-1",
        id: 10,
        children: [
          {
            label: "Level three 3-1-1",
            id: 11,
          },
        ],
      },
      {
        label: "Level two 3-2",
        id: 12,
        children: [
          {
            label: "Level three 3-2-1",
            id: 13,
          },
        ],
      },
    ],
  },
]

const targetIds = [1, 3, 6]
</script>
