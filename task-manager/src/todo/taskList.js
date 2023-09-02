import React from "react";
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

const TaskList = ({ create, tasks, buttonOne, buttonTwo, favPress }) => {
  return tasks.map((task, ind) => {
    return (
      <Grid item key={ind} xs={12} sm={6} md={4}>
        <Card
          sx={{
            // height: "100%",
            backgroundColor: create ? "#eaebee" : "#ffdddd",
          }}
        >
          <CardMedia
            component="div"
            sx={{
              pt: "56.25%",
            }}
            image={task.taskImage}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <div style={useStyles.favIconContainer}>
              <Typography
                paddingTop={1}
                paddingLeft={1}
                gutterBottom
                variant="h5"
                component="h2"
                style={{
                  textDecoration: !create && "line-through",
                }}
              >
                {task.taskName}
              </Typography>
              {create ? (
                task.favorite ? (
                  <FavoriteIcon
                    onClick={() => favPress(task, ind)}
                    style={useStyles.favIcon}
                  />
                ) : (
                  <FavoriteBorderIcon
                    onClick={() => favPress(task, ind)}
                    style={useStyles.favIcon}
                  />
                )
              ) : null}
            </div>
            <div style={{overflow: "hidden", textOverflow: "ellipsis", maxHeight: '25px'}}>
            <Typography
            
              paddingLeft={1}
            >
              {task.taskDescription}
            </Typography>
            </div>
            <Typography paddingLeft={1} color={"red"}>
              {task.taskDeadline}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => buttonOne(task, ind)}>
              {create ? "EDIT" : "RE-OPEN"}
            </Button>
            <Button size="small" onClick={() => buttonTwo(task, ind)}>
              {create ? "Complete" : "DELETE"}
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });
};

export default TaskList;
