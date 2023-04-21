<script context="module">
  import { go } from "./utils/index.js";
  let onBenchmark;

  export async function benchmark() {
    console.time("benchmark");
    await go(onBenchmark);
    console.timeEnd("benchmark");
  }
</script>

<script>
  import { list, token } from "./utils/index.js";
  let listData = list;
  function mutate() {
    listData.forEach((item) => {
      setTimeout(() => {
        item.name = token();
        listData = [...listData];
      }, 0);
    });
  }
  onBenchmark = mutate;
</script>

<ul>
  {#each listData as item}
    <li>
      {item.name}
    </li>
  {/each}
</ul>
