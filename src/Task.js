class Task {

  #dateDue
  #description
  #status

  constructor(dateDue, description) {
    //Task due date - not all tasks have a due date. If a task has no
    //due date, dueDate will be null
    this.#dateDue = dateDue
    this.#description = description
    this.#status = "incomplete"
  }

  getStatus() {
    return this.#status
  }

  isComplete() {
    if (this.#status === "complete") {
      return true
    }
    return false
  }

  setComplete() {
    this.#status = "complete"
    return this.getStatus()
  }

  hasValidDueDate() {
    if (this.#dateDue !== null) {
      return true
    }
    return false
  }

  isOverDue() {
    const today = new Date()
    if (today > this.#dateDue) {
      return true
    }
    return false
  }
}

module.exports = Task