import { useState } from "react";
import ShowCustomers from "../modules/ShowCustomers";
import { Grid2 } from "@mui/material";

function GetCustomersPage({ data }) {
  const [customers, setCustomers] = useState(data);

  return (
    <>
      <Grid2
        container
        spacing={2}
        sx={{ marginTop: "16px", marginBottom: "16px" }}
      >
        {customers.map((item) => (
          <Grid2 key={item._id} size={{ xs: 12 }}>
            <ShowCustomers data={item} />
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}

export default GetCustomersPage;
