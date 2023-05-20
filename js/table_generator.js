const data = [{Name:'Sydney', Day: 'Monday', Time: '10:00AM'},{Name:'New York', Day: 'Monday',Time: '11:00AM'},];

const tableData = data.map(value => {
  return (
    `<tr>
       <td>${value.Name}</td>
       <td>${value.Day}</td>
       <td>${value.Time}</td>
    </tr>`
  );
}).join('');

const tableBody = document.querySelector("#tableBody");
tableBody.innerHTML = tableData;