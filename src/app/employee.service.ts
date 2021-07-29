import { Injectable } from '@angular/core';
import { Employee } from 'Models/Employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService 
{
  //Creating a list of Employees.
  employeeList:Employee[]=
  [
    {
      id:1,
      name:"Pankaj Choudhary",
      salary:20000,
      permanent:true,
      department:{id:1,name:"PayRoll"},
      skill:[{id:1,name:"Cooking"},{id:2,name:"gardening"},{id:3,name:"Athlete"}],
      dateOfBirth:new Date("1988-11-05"),
      photoURL:"assets/Images/user.png"
    },
    {
      id:2,
      name:"Mohan Lal Singh",
      salary:30000,
      permanent:true,
      department:{id:2,name:"Internal"},
      skill:[{id:1,name:"Striker"},{id:2,name:"Player"},{id:3,name:"Athlete"}],
      dateOfBirth:new Date("1987-06-24"),
      photoURL:"assets/Images/user.png"
    },
    {
      id:3,
      name:"Ram Dalal",
      salary:40000,
      permanent:false,
      department:{id:3,name:"HR"},
      skill:[{id:1,name:"Designer"},{id:2,name:"Detective"},{id:3,name:"Coach"}],
      dateOfBirth:new Date("1973-01-11"),
      photoURL:"assets/Images/user.png"
    }
  ];

  constructor() { }
  
  //Creating an empty employee object.
  empty_emp:any={};

  //Get all employees.
  getAllEmployees():Employee[]
  {
    return this.employeeList;
  }

  //Get employee by id.
  getEmployee(employeeId:number):Employee
  {
    

    this.employeeList.forEach(item => {
      if(item.id==employeeId)
      this.empty_emp=item;  
    });

    return this.empty_emp;
  }

}
