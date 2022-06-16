class Task {
  constructor(dateDue, description) {
    //Task due date - not all tasks have a due date. If a task has no
    //due date, dueDate will be null
    this.dateDue = dateDue
    this.description = description
    this.status = "incomplete"
  }

  isIncomplete() {
    if (this.status === "incomplete") {
      return true
    }
    return false
  }

  hasValidDueDate() {
    if (this.dateDue !== null) {
      return true
    }
    return false
  }

  isOverDue() {
    const today = new Date()
    if (today > this.dateDue) {
      return true
    }
    return false
  }
}

module.exports = Task