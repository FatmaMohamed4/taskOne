function fetchUserDataPromise(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = {
             1: { id: 1, name: 'alaa' } ,
             2: { id: 2, name: 'malak' } ,
            };
        const user = users[userId];
        user ? resolve(user) : reject(new Error('User not found'));
      }, 1000);
    });
  }
  
  function fetchUserTasksPromise(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const tasks = [
          { userId: 1, task: 'task1' },
          { userId: 1, task: 'task2' },
          { userId: 2, task: 'task2' }, 

        ];
        const userTasks = tasks.filter(task => task.userId === userId);
        userTasks.length > 0 ? resolve(userTasks) : reject(new Error('Tasks not found'));
      }, 1500);
    });
  }
  


  // fetchUserDataPromise(2)
  //   .then(user => {
  //     console.log('User:', user);
  //     return fetchUserTasksPromise(user.id);
  //   })
  //   .then(tasks => {
  //     console.log('Tasks:', tasks);
  //   })
  //   .catch(err => {
  //     console.error(err.message);
  //   });
  



  async function fetchUserDataAndTasks(userId) {
    try {
      const user = await fetchUserDataPromise(userId);
      console.log('User:', user);
      const tasks = await fetchUserTasksPromise(user.id);
      console.log('Tasks:', tasks);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // Example usage with async/await
  fetchUserDataAndTasks(1);