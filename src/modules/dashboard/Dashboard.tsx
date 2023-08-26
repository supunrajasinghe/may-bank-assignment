import { Grid } from "@mui/material";
import { FC } from "react";
import { dashboardStyles } from "./styles";
import LocationSearch from "../../components/LocationSearch/LocationSearch";
import LocationList from "../../components/LocationList/LocationList";

type DashboardProps = {
  id: string;
};

const Dashboard: FC<DashboardProps> = ({ id }) => {
  return (
    <Grid id={id} sx={dashboardStyles()} container spacing={2}>
      <Grid item md={6}>
        <LocationSearch id="location-search" />
      </Grid>
      <Grid item md={6}>
        <LocationList id="location-list" />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
