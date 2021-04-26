<template>
  <main class="main-container">
    <TaskHeader @task-add="taskAddHandler" />
    <div class="pt-24 px-4 grid grid-cols-1">
      <div class="tasks tasks--uncompleted">
        <TaskItem
          v-for="task in uncompletedTasks"
          :key="task.id"
          :label="task.label"
          @trash="trashHandler(task)"
          @check="checkHandler(task)"
        />
        <div
          v-if="uncompletedTasks.length === 0"
          class="mt-4 text-sm text-silver-chalice text-center"
        >
          You have nothing to-do!
        </div>
      </div>
      <div class="tasks tasks--completed">
        <TaskItem
          v-for="task in completedTasks"
          :key="task.id"
          :label="task.label"
          @trash="trashHandler(task)"
          @check="checkHandler(task)"
          :checked="task.isCompeted"
        />
        <div
          v-if="completedTasks.length === 0"
          class="mt-4 text-sm text-silver-chalice text-center"
        >
          You have yet to complete any tasks.
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import TaskHeader from "./components/TaskHeader.vue";
import TaskItem from "./components/TaskItem.vue";

export default {
  components: {
    TaskHeader,
    TaskItem,
  },
  data: () => ({
    tasks: [],
  }),
  watch: {
    tasks: {
      deep: true,
      handler(current) {
        localStorage.setItem('todoListData', JSON.stringify(current));
      }
    }
  },
  created() {
    const tasksRaw = localStorage.getItem('todoListData');
    if (tasksRaw) {
      this.tasks = JSON.parse(tasksRaw);
    }
  },
  computed: {
    completedTasks() {
      return this.tasks.filter((t) => Boolean(t.isCompeted));
    },
    uncompletedTasks() {
      return this.tasks.filter((t) => !t.isCompeted);
    },
  },
  methods: {
    taskAddHandler(task) {
      this.tasks.push({
        id: Math.random(),
        label: task,
        isCompeted: false,
      })
    },
    trashHandler(task) {
      const tasks = [...this.tasks];
      const taskIndex = tasks.findIndex((t) => t.id === task.id);
      tasks.splice(taskIndex, 1);
      this.tasks = [...tasks];

    },
    checkHandler(task) {
      const tasks = [...this.tasks];
      const taskIndex = tasks.findIndex((t) => t.id === task.id);
      tasks[taskIndex] = {
        ...task,
        isCompeted: !task.isCompeted,
      }

      this.tasks = [...tasks];
    },
  },
};
</script>

<style lang="scss" scoped>

.main-container {
  @apply bg-porcelain w-screen h-screen font-sans;
}

.tasks {

  &--completed {
    position: relative;
    padding: 60px 0 0;

    &:before {
      @apply bg-nebula;
      content: "";
      width: 150px;
      height: 2px;
      position: absolute;
      top: 30px;
      left: 50%;
      margin: 0 0 0 -75px;
    }

    .task-btn.check .fa {
      @apply bg-shamrock border-shamrock text-white;

      &:hover {
        @apply text-shamrock;
      }
    }
  }
}
</style>
