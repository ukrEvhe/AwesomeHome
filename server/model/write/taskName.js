import dbList from './../../db';

const taskNameWrite = dbList.write('taskName');

class TaskNameModel {
  getAll() {
    return taskNameWrite.findRows();
  }

  addName(data) {
    return taskNameWrite.insertRow({
      data: {
        name: data.name,
        householdId: data.householdId,
      },
    });
  }

  delete(data) {
    return taskNameWrite.deleteRow({
      query: {
        _id: data._id,
      },
    });
  }

  findByName(name) {
    return taskNameWrite.findRow({
      query: {
        name,
        isDeleted: false,
      },
    });
  }

  findById(_id) {
    return taskNameWrite.findRow({
      query: {
        _id,
        isDeleted: false,
      },
    });
  }
}

export default new TaskNameModel();
