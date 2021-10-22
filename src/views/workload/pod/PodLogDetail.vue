<template>
  <PageWrapper :title="`命名空间` + namespace + `下容器` + name + `的日志`" contentBackground>
    <div class="logs"> {{ data }} </div>
  </PageWrapper>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { PageWrapper } from '/@/components/Page';
  import { useGo } from '/@/hooks/web/usePage';
  import { useTabs } from '/@/hooks/web/useTabs';
  import { getPodLog } from '/@/api/kubernetes/pod';

  export default defineComponent({
    name: 'PodLogDetail',
    components: { PageWrapper },
    setup() {
      const route = useRoute();
      const go = useGo();
      const namespace = ref(route.params?.namespace);
      const name = ref(route.params?.name);
      const currentKey = ref('detail');
      let data = ref('');
      const { setTitle } = useTabs();

      // 设置Tab的标题（不会影响页面标题）
      setTitle('pod的日志');

      // 页面左侧点击返回链接时的操作
      function goBack() {
        // 本例的效果时点击返回始终跳转到账号列表页，实际应用时可返回上一页
        go('/workload/pod');
      }

      getPodLog({ namespace: namespace.value, podName: name.value, tailLines: 300 }).then((res) => {
        console.log(res);
        data.value = res;
      });

      return { name, namespace, currentKey, goBack, data };
    },
  });
</script>

<style>
  .logs {
    overflow: auto;
    margin: 10px auto;
    min-height: 750px;
    max-height: 900px;
    border: solid 1px black;
    background-color: #454545;
    padding: 10px;
    color: #27aa5e;
    line-height: 21pt;
    white-space: pre;
    width: 90%;
  }
</style>
