const users = [{ id: 1, name: "John Doe" }];

// Mock tasks data
const tasks = [
  { userId: 1, task: "Write code" },
  { userId: 1, task: "Review PRs" },
];


function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === userId);
      if (user) {
        resolve(user);
      } else {
        reject(new Error("User not found"));
      }
    }, 1000);
  });
}

function fetchTasks(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userTasks = tasks.filter((task) => task.userId === userId);
      if (userTasks.length > 0) {
        resolve(userTasks);
      } else {
        reject(new Error("Tasks not found for the user"));
      }
    }, 1500);
  });
}


async function main() {
  try {
    const user = await fetchUser(1);
    console.log("User:", user);

    const userTasks = await fetchTasks(1);
    console.log("Tasks:", userTasks);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
