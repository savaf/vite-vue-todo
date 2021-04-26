<template>
  <div class="task">
    <div class="task-description">
      {{ $attrs.label }}
    </div>
    <div class="task-btns">
      <div>
        <button class="task-btn remove" @click="trash">
          <i class="fa fa-trash"></i>
        </button>
        <button
          class="task-btn check"
          :class="{
            checked: $attrs.checked,
          }"
          @click="check"
        >
          <i class="fa fa-check"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    trash() {
      this.$emit("trash", false);
    },
    check() {
      this.$emit("check", true);
    },
  },
};
</script>

<style lang="scss" scoped>
$emerald: #2ecc71;
$silver: #bdc3c7;
$alizarin: #e74c3c;

.task {
  width: 100%;
  min-height: 50px;
  float: left;
  font-size: 14px;
  font-weight: 500;
  color: #444;
  line-height: 22px;
  background: #fff;
  border-radius: 5px;
  position: relative;
  box-shadow: 0px 1px 2px rgba(44, 62, 80, 0.1);
  margin: 0 0 10px 0;
  padding: 14px 100px 14px 14px;
  word-break: break-word;

  &-btns {
    height: 50px;
    position: absolute;
    right: 0;
    top: 0;
    width: 100px;
  }

  &-btn {
    appearance: none;
    background: none;
    border: 0px;
    box-shadow: none;
    color: $silver;
    cursor: pointer;
    float: left;
    height: 50px;
    outline: none;
    position: relative;
    width: 50%;

    &:last-of-type:before {
      background: #edf0f1;
      content: "";
      height: 30px;
      left: 0;
      position: absolute;
      top: 10px;
      width: 1px;
    }

    .fa {
      border: solid 2px $silver;
      border-radius: 50%;
      height: 50%;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.2s ease;
      width: 50%;

      &:before {
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &.remove:hover .fa {
      background-color: $alizarin;
      border-color: $alizarin;
      color: white;
      padding: 20%;
    }

    &.check {
      &:hover .fa,
      &.checked .fa {
        border-color: $emerald;
        color: $emerald;
        padding: 20%;
      }
    }
  }
}
</style>
