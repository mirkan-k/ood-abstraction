class TaskList {

  constructor() {
    this.tasks = []
  }

  addTask(task) {
    this.tasks.push(task)
  }

  getOverdueTasks() {
    const overdueTasks = []
    for (const task of this.tasks) {
      //it's not been completed
      if (task.isIncomplete()) {
        //if it has a due date
        if (task.hasValidDueDate()) {
          //if the due date has passed then the task is overdue
          if (task.isOverDue()) {
            overdueTasks.push(task)
          }
        }
      }
    }
    return overdueTasks
  }
}

module.exports = TaskList