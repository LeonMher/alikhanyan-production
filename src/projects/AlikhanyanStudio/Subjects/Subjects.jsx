import TablePic from "../../../assets/Table.png";

const Subjects = () => {
  const data = [
    { subject: "Piano", pricePerHour: 50 },
    { subject: "Guitar", pricePerHour: 40 },
    { subject: "Violin", pricePerHour: 60 },
    { subject: "Drums", pricePerHour: 30 },

    { afterSchool: "English" },
    { afterSchool: "Math" },
    { afterSchool: "Science" },

    // Add more subjects here
  ];
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Price per Hour</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>English</td>
            <td>$40</td>
          </tr>
          <tr>
            <td>Math</td>
            <td>$50</td>
          </tr>
          <tr>
            <td>Science</td>
            <td>$45</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Subjects;
