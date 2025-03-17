// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import { TableComponent } from "../../../components/TableComponent";

const Subjects = () => {
  function createData(sections, pricing) {
    return { sections, pricing };
  }

  const data = [
    { id: 1, name: "Հարվածային գործիքներ", price: "8 դասը՝ 20.000 AMD" },
    { id: 2, name: "Դհոլ", price: "8 դասը՝ 10.000 դրամ" },
    { id: 3, name: "Կիթառ", price: "8 դասը՝ 15.000 դրամ, խմբում 2-3 աշակերտ" },
    { id: 4, name: "Դաշնամուր", price: "Միայն անհատական դասեր" },
    { id: 5, name: "Ջութակ", price: "Միայն անհատական դասեր" },
    { id: 6, name: "Պար", price: "12 դասը՝ 15.000 դրամ" },
  ];
  const personalTeaching = [
    {
      id: 1,
      name: "Հարվածային գործիքներ",
      price: "8 դասը՝ 50.000 AMD, մաստեր կլասս 1 դասը՝ 10.000 դրամ",
    },
    {
      id: 2,
      name: "Դհոլ",
      price: "8 դասը՝ 40.000 դրամ, մաստեր կլասս 1 դասը՝ 10.000 դրամ",
    },
    {
      id: 3,
      name: "Վոկալ",
      price: "8-13 տ. 1 դասը՝ 5.000 դրամ, 13 տ.-ից բարձր 1 դասը՝ 6.000 դրամ",
    },
    { id: 4, name: "Կիթառ", price: "1 դասը՝ 5.000 դրամ" },
    { id: 5, name: "Դասշնամուր", price: "1 դասը՝ 5.000 դրամ" },
    {
      id: 6,
      name: "Ջութակ",
      price: "8-13 տ. 1 դասը՝ 5.000 դրամ, 13 տ.-ից բարձր 1 դասը՝ 6.000 դրամ",
    },
    { id: 7, name: "Պար", price: "Անհատական 8 դասը՝ 25.000 դրամ" },
  ];

  const afterSchoolData = [
    {
      id: 1,
      subject: "Մաթեմատիկա",
      name: "4-7",
      price: "Անհատական 1 դասը` 3.000 դրամ",
    },
    {
      id: 2,
      subject: "Մաթեմատիկա",
      name: "8-12",
      price: "Անհատական 1 դասը` 4.000 դրամ",
    },
    {
      id: 3,
      subject: "Անգլերեն",
      name: "0 մակարդակ	",
      price: "1 դաս- 3.000 դրամ, խմբայինը` 2.000 դրամ",
    },
    {
      id: 4,
      subject: "Հայոց լեզու",
      name: "	",
      price: "8 անհատական դաս- 30.000 դրամ",
    },
  ];

  const lessonPreparation = [
    {
      id: 1,
      name: "1-3-րդ դասարան",
      price: "45.000 դրամ",
    },
    {
      id: 2,
      name: "4-6-րդ դասարան	",
      price: "60.000 դրամ",
    },
    {
      id: 3,
      name: "7-9-րդ դասարան	",
      price: "80.000 դրամ",
    },
  ];

  const columns = ["name", "price"];
  const columnNames = ["բաժիններ", "գին"];
  // const columnNames = ["բաժիններ", "գին", "մաթեմատիկա"];
  return (
    <div>
      <h1>Խմբային դասեր</h1>
      <TableComponent
        data={data}
        columns={columns}
        columnNames={["բաժիններ", "գին"]}
      />
      <div className="h-10"></div>
      <h1>Անհատական դասեր</h1>
      <TableComponent
        data={personalTeaching}
        columns={columns}
        columnNames={columnNames}
      />
      <div className="h-10"></div>
      <h1>After School</h1>
      <TableComponent
        data={afterSchoolData}
        columns={columns}
        columnNames={["Դասարան", "գին"]}
      />
      <div className="h-10"></div>
      <h1>Դասապատրաստում</h1>
      <TableComponent
        data={lessonPreparation}
        columns={columns}
        columnNames={["Դասարան", "գին"]}
      />
    </div>
  );
};

export default Subjects;
