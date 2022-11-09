<template>
  <div>
    <jlc-pro-table
      ref="fptRef"
      :filters="filters"
      :columns="columns"
      :get-data="getUserList"
      :table-props="{ 'highlight-current-row': true }"
      :page-props="{ defaultPageSize: 5, pageSizes: [5,6,7] }"
      @selection-change="selectionChange"
      @selecasd="selectionChange"
      @select="selectionChange"
    >
      <template #filter-bottom >
        <div style="margin-bottom: 10px;">
          <el-button>新增</el-button>
          <el-button @click="clearSelection">clearSelection</el-button>
          <el-button @click="reset">reset</el-button>
        </div>
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
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const fptRef = ref()

  const filters = ref<any[]>([
    {
      key: 'name',
      label: '姓名',
      value: 'ly'
    },
    {
      label: '状态',
      key: 'status',
      slot: 'filter-status',
    },
  ])
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

  setTimeout(() => {
    filters.value.push({
      label: '年龄',
      key: ['a', 'b'],
      type: 'rangeTime'
    })
  })

  const reset = () => {
    // fptRef.value.refresh()
    // fptRef.value.resetFilter()
    fptRef.value.resetPage()
  }

  const selectionChange = (rows: any[]) => {
    console.log(rows)
  }

  const getUserList = (params: any) => {
    console.log(params)
    return Promise.resolve({
            list: [{ id: 6661, name: 'liyu' }, { id: 122, name: 'xiaomei' }],
            total: 20,
          })
  }


  const clearSelection = () => {
    fptRef.value.clearSelection()
  }

  const onSelectionChange = (selection: any) => {
    console.log(selection)
  }
</script>
