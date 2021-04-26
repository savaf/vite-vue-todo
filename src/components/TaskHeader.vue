<template>
  <div class="task-header">
    <input
      class="task-header__input"
      type="text"
      placeholder="Enter a activity"
      v-model="current"
      @keyup.enter="taskAdd"
    />
    <button type="button" class="task-header__add" @click="taskAdd">
      <i class="fa fa-plus"></i>
    </button>
  </div>
</template>

<script>
export default {
  emits: ["task-add"],
  props: {
    value: {
      type: String,
      default: () => null,
    },
  },
  data: () => ({
    current: null,
  }),
  watch: {
    value: {
      immediate: true,
      handler(current) {
        this.current = current;
      },
    },
  },
  methods: {
    taskAdd() {
      this.$emit("task-add", this.current);
      this.current = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.task-header {
  @apply bg-mariner;
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 2px 4px rgba(44, 62, 80, 0.15);
  height: 80px;
  left: 0;
  padding: 15px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;

  &__input,
  &__add {
    appearance: none;
    border: 0px;
    box-shadow: none;
    height: 50px;
    font-size: 16px;
    outline: none;
  }

  &__input {
    background: rgba(white, 0.2);
    border-radius: 5px 25px 25px 5px;
    color: #fff;
    float: left;
    padding: 0 60px 0 0;
    text-indent: 18px;
    width: 100%;

    &::placeholder {
      color: rgba(white, 0.75);
    }
  }

  &__add {
    @apply text-mariner bg-white;
    border-radius: 25px;
    cursor: pointer;
    position: absolute;
    font-size: 22px;
    right: 15px;
    top: 15px;
    width: 50px;
    z-index: 2;
  }
}
</style>
