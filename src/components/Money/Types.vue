<template>
  <div>
    <ul class="types">
      <li
        @click="selectType('-')"
        :class="{selected:type==='-',[classPrefix+'-item']:classPrefix}"
      >支出</li>
      <li class="item" :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Types extends Vue {
  @Prop(String) readonly type!: "-" | "+";
  @Prop(String) classPrefix?: string;
  //@Prop(Number) xxx: number | undefined; //左边是传值的类型，右边的是对其操作的时候的检查
  //左边告诉Vue 运行时 右边告诉TS 编译时
  selectType(type: "-" | "+") {
    this.$emit("update:value", type);
  }
  // @Watch("type") //WATCH类似于useEffect(()=>{},[type])
  // onTypeChanged(type: "-" | "+") {
  //   this.$emit("update:value", type);
  // }
}
// export default {
//   name: "Types",
//   props:['xxx'],
//   data(){
//       return{
//           type:'-'
//       }
//   },
//   methods:{
//       selectType(type){
//           this.type = type
//       }
//   },
//   mounted(){
//       console.log(this.xxx)
//   }

// };
</script>

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>