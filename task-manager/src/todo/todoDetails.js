import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useStyles from "./styles";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const TodoDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  return (
    <div>
      <Card>
        <CardActions>
          <Button size="large" onClick={() => navigate("/")}>
            {"Back"}
          </Button>
        </CardActions>
        <Grid container spacing={1} padding={2}>
          <Grid item key={state.taskName} xs={12} sm={8} md={8}>
            <CardMedia
              sx={{
                pt: "56.25%",
              }}
              image={state.taskImage}
            />
          </Grid>
          <Grid item key={state.taskName} xs={12} sm={4} md={4}>
            <CardContent
              sx={{ flexGrow: 1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                height:'100%',
              }}
            >
              <div style={useStyles.favIconContainer}>
                <Typography variant="h6">{state.taskName}</Typography>
                {state.favorite ? (
                  <FavoriteIcon
                    // onClick={() => favPress(state, ind)}
                    style={useStyles.favIcon}
                  />
                ) : (
                  <FavoriteBorderIcon
                    // onClick={() => favPress(state, ind)}
                    style={useStyles.favIcon}
                  />
                )}
              </div>
              <div style={{
                paddingBottom:'2%'
              }}>
                <Typography>{state.taskDescription}</Typography>
              </div>
              <Typography color={"red"}>{state.taskDeadline}</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default TodoDetails;
