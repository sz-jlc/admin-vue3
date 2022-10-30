<template>
  <jlc-pro-table
    ref="fptRef"
    :filters="[]"
    :columns="columns"
    :get-data="getUserList"
    :table-events="tableEvents"
  >
    <template #filter-bottom>
      <el-button>新增</el-button>
    </template>
    <template #filter-status="{ bindForm }">
      <el-select v-model="bindForm.status" class="w-full">
        <el-option label="ly" value="1" />
        <el-option label="lyxxx" value="2" />
      </el-select>
    </template>
    <template #table-name="{ row }">
      <div>
        <el-input v-model="row.name" />
      </div>
    </template>
  </jlc-pro-table>
</template>

<script setup lang="ts">
  const fptRef = ref()

  const filters = [
    {
      key: 'name',
      label: '状态',
    },
    {
      label: '状态',
      key: 'status',
      slot: 'filter-status',
    },
  ]
  const columns = [
    {
      type: 'selection',
    },
    {
      type: 'index',
      label: '#',
    },
    {
      label: 'ID',
      prop: 'id',
    },
    {
      label: '姓名',
      prop: 'name',
      slot: 'table-name',
    },
  ]

  let i = 0

  const getUserList = (params: any) => {
    console.log(params)
    return new Promise<any>((resolve, reject) => {
      if (i % 2 == 0) {
        setTimeout(() => {
          reject()
        }, 500)
      } else {
        setTimeout(() => {
          resolve({
            list: [{ a: 1 }, { b: 2 }],
            total: 20,
          })
        }, 1000)
      }
      i++
    })
  }

  const tableEvents = {
    select(selection: any, row: any) {
      console.log(selection, row)
    },
  }

  const clearSelection = () => {
    fptRef.value.clearSelection()
  }

  const onSelectionChange = (selection: any) => {
    console.log(selection)
  }
</script>
