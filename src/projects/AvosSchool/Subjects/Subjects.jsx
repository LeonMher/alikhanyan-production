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

  const rows = [
    createData("Հարվածային գործիքներ", "8 դասը՝ 20.000 AMD"),
    createData("Դհոլ", "8 դասը՝ 10.000 դրամ"),
    createData("Կիթառ", "8 դասը՝ 15.000 դրամ, խմբում 2-3 աշակերտ"),
    createData("Դասշնամուր", "Միայն անհատական դասեր"),
    createData("Ջութակ", "Միայն անհատական դասեր"),
    createData("Պար", "12 դասը՝ 15.000 դրամ"),
  ];

  const data = [
    { id: 1, name: "Հարվածային գործիքներ", price: "8 դասը՝ 20.000 AMD" },
    { id: 2, name: "Դհոլ", price: "8 դասը՝ 10.000 դրամ" },
    { id: 3, name: "Կիթառ", price: "8 դասը՝ 15.000 դրամ, խմբում 2-3 աշակերտ" },
    { id: 4, name: "Դաշնամուր", price: "Միայն անհատական դասեր" },
    { id: 5, name: "Ջութակ", price: "Միայն անհատական դասեր" },
    { id: 6, name: "Պար", price: "12 դասը՝ 15.000 դրամ" },
  ];

  const columns = ["name", "price"];
  return (
    <div>
      {/* <TableContainer
        component={Paper}
        sx={{ "@media (max-width: 600px)": { overflowX: "auto" } }}
      >
        <Table sx={{ minWidth: 250 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Բաժիններ</TableCell>
              <TableCell align="right">Խմբային դասեր</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.sections}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.sections}
                </TableCell>
                <TableCell align="right">{row.pricing}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
      <TableComponent data={data} columns={columns} />
      <div className="h-10"></div>
      <TableComponent data={data} columns={columns} />
    </div>
  );
};

export default Subjects;
