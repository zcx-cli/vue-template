<template>
  <div id="app">
    <button @click="handleClick">打开文件夹</button>
    <p>{{ codeText }}</p>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      codeText: ''
    }
  },

  created () {
  },
  methods: {
    async processHandler (handle) {
      if (handle.kind === 'file') {
        return handle
      }
      handle.children = []
      const iter = await handle.entries();//获得文件夹中的所有内容
      //iter:异步迭代器
      for await (const info of iter) {
        var subHandle = await this.processHandler(info[1]);
        handle.children.push(subHandle)
      }
      return handle
    },
    async handleClick () {
      const fileList = []
      const res = await window.showDirectoryPicker({});
      const detailAction = async (obj) => {
        if (obj.entries) {
          const dirs = obj.entries();
          for await (const entry of dirs) {
            if (entry[1].entries) {
              // 文件夹，递归处理
              detailAction(entry[1]);
            } else {
              // 文件
              fileList.push({
                name: entry[0],
                path: obj.name,
                fileHandle: entry[1],
              });
            }
          }
        }
      };
      await detailAction(res);
      console.log("--fileList--", fileList);
      fileList.forEach(async (item) => {
        const file = await item.fileHandle.getFile();
        console.log(' file', file)
        const test = await file.text();
        this.codeText = test
        console.log(' codeText', this.codeText)
      })

    }
  },
}
</script>

<style></style>
