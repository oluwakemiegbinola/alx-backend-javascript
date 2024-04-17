interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const studentA: Student = {
    firstName: "John",
    lastName: "Smith",
    age: 23,
    location: "Nigeria",
  };
  
  const studentB: Student = {
    firstName: "Jerry",
    lastName: "Rawlings",
    age: 45,
    location: "Ghana",
  };
  
  const studentsList = [studentA, studentB];
  
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  
  studentsList.forEach((obj) => {
    const row = document.createElement("tr");
    const cellName = document.createElement("td");
    const cellLocation = document.createElement("td");
    cellName.textContent = obj.firstName;
    cellLocation.textContent = obj.location;
    row.appendChild(cellName);
    row.appendChild(cellLocation);
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  document.body.appendChild(table);