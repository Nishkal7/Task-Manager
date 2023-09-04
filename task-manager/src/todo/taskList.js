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

const TaskList = ({
  create,
  tasks,
  buttonOne,
  buttonTwo,
  favPress,
  navigationHandler,
}) => {
  return tasks.map((task, ind) => {
    return (
      <Grid item key={ind} xs={12} sm={6} md={4}>
        <Card
          sx={{
            backgroundColor: create ? "#eaebee" : "#ffdddd",
          }}
        >
          <CardMedia
            component="div"
            sx={{
              pt: "56.25%",
            }}
            image={task.taskImage}
            onClick={() => navigationHandler(task)}
          />
          <CardContent
            sx={{ flexGrow: 1 }}
          >
            <div style={useStyles.favIconContainer}>
              <Typography
                variant="h6"
                noWrap={true}
                style={{
                  textDecoration: !create && "line-through",
                }}
                onClick={() => navigationHandler(task)}
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
            <div >
              <Typography noWrap={true}>{task.taskDescription}</Typography>
            </div>
            <Typography onClick={() => navigationHandler(task)} color={"red"}>{task.taskDeadline}</Typography>
          </CardContent>
          <CardActions>
            <Button size="large" onClick={() => buttonOne(task, ind)}>
              {create ? "EDIT.." : "REOPEN"}
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
