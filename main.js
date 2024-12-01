// Create a function to simulate fetching user data from a database or API
function fetchData(id) {
    return new Promise((resolve, reject) => {
      console.log('DB is connected & fetching data ....');
  
      const data = {
        1:{ id: 1, name: 'Ali' },
        2: { id: 2, name: 'Moaz' },
        3: { id: 3, name: 'Kareem' },
      }
  
      setTimeout(() => {
        const userData = data[id];
  
        if (userData) {
          resolve(userData); 
        } else {
          reject(new Error('User not found'))
        }
      }, 2000);
    });
  }
  

  fetchData(id =5)
    .then(userData => {
      console.log('User data :', userData); 
    })
    .catch(error => {
      console.error('Error fetching user data:', error.message);
    });

//   ///

    function fetchTask(id) {
        return new Promise((resolve, reject) => {
          console.log('DB is connected & fetching data ....');
      
          const data = {
            1: { id: 1, title: 'task1' },
            2: { id: 2, title: 'task2' },
            3: { id: 3, title: 'task3' },
          };
      
          setTimeout(() => {
            const task = data[id];
      
            if (task) {
              resolve(task); 
            } else {
              reject(new Error('Task not found'))
            }
          }, 2000);
        });
      }
fetchTask(3) 
.then(task => {
    console.log('Task :', task); 
  })
  .catch(error => {
    console.error('Error fetching Task data:', error.message);
  });   
    

      
    