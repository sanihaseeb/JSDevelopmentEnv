import {getUsers, deleteUser} from './api/userApi';
import {getEmployees} from './api/employeeApi';


getUsers().then(result =>{
  let usersBody = "";

  result.forEach(user => {
    usersBody+=
    `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td> ${user.id}</td>
      <td> ${user.firstName}</td>
      <td> ${user.lastName}</td>
      <td> ${user.email}</td>
    </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');
Array.from(deleteLinks, link => {
  link.onclick = function(event){
    const element = event.target;
    event.preventDefault();
    deleteUser(element.attributes["data-id"].value);
    const row = element.parentNode.parentNode;
    row.parentNode.removeChild(row);
  };
}),

getEmployees().then(result =>{
  let employeesBody = "";

  result.forEach(employee => {
    employeesBody+=
    `<tr>
      <td><a href="#" data-id="${employee.id}" class="deleteEmployee">Delete</a></td>
      <td> ${employee.id}</td>
      <td> ${employee.firstName}</td>
      <td> ${employee.lastName}</td>
      <td> ${employee.email}</td>
    </tr>`
  });


  global.document.getElementById('employees').innerHTML = employeesBody;
});

/*
  const deleteLinks = global.document.getElementsByClassName('deleteUser');
Array.from(deleteLinks, link => {
  link.onclick = function(event){
    const element = event.target;
    event.preventDefault();
    deleteUser(element.attributes["data-id"].value);
    const row = element.parentNode.parentNode;
    row.parentNode.removeChild(row);
  };
})

*/
});
