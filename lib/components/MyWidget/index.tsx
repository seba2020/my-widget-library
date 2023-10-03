import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MyAvatar } from "../MyAvatar";

export const MyWidget = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [arrowAnchorEl, setArrowAnchorEl] = useState<null | HTMLElement>(null);

  const openMenu = Boolean(menuAnchorEl);
  const openArrow = Boolean(arrowAnchorEl);

  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };

  const handleClickArrow = (event: React.MouseEvent<HTMLButtonElement>) => {
    setArrowAnchorEl(event.currentTarget);
  };

  const handleCloseArrow = () => {
    setArrowAnchorEl(null);
  };

  return (
    <Card
      sx={{
        borderRadius: 4,
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        // background: "rgb(2,0,36)",
      }}
    >
      <Box
        sx={{
          // background: 'rgb(42,37,229)',
          background:
            "linear-gradient(90deg, rgba(42,37,229,1) 0%, rgba(66,191,255,1) 93%)",
          py: 3,
          px: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <MyAvatar />
          {/* <Avatar src="https://qph.cf2.quoracdn.net/main-qimg-729a22aba98d1235fdce4883accaf81e" /> */}
          <Typography
            variant="h5"
            sx={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Chat with us!
          </Typography>
        </Box>
        <Box>
          <IconButton
            onClick={handleClickMenu}
            sx={{
              color: "white",
            }}
          >
            <MoreVertIcon />
          </IconButton>
          <IconButton
            onClick={handleClickArrow}
            sx={{
              color: "white",
            }}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        </Box>
        <Menu
          id="basic-menu"
          anchorEl={menuAnchorEl}
          open={openMenu}
          onClose={handleCloseMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
          <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
          <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
        </Menu>

        <Menu
          id="basic-menu-arrow"
          anchorEl={arrowAnchorEl}
          open={openArrow}
          onClose={handleCloseArrow}
          MenuListProps={{
            "aria-labelledby": "basic-button-arrow",
          }}
        >
          <MenuItem onClick={handleCloseArrow}>Profile #1</MenuItem>
          <MenuItem onClick={handleCloseArrow}>My account #1</MenuItem>
          <MenuItem onClick={handleCloseArrow}>Logout #1</MenuItem>
        </Menu>
      </Box>
      <Divider />
      {/* the content should be scrollable */}
      <CardContent
        sx={{
          overflowY: "scroll",
          height: "300px",
        }}
      >
        <h1>My Widget</h1>
        <p>
          This is a widget that can be used in any React app. It is a
          self-contained component with its own styles.
        </p>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quam
          officia fuga eius, doloribus ratione ipsam enim, assumenda perferendis
          dolore placeat harum labore provident, optio non nobis alias ipsum?
          Ex.
        </h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quam
          officia fuga eius, doloribus ratione ipsam enim, assumenda perferendis
          dolore placeat harum labore provident, optio non nobis alias ipsum?
          Ex.
        </h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quam
          officia fuga eius, doloribus ratione ipsam enim, assumenda perferendis
          dolore placeat harum labore provident, optio non nobis alias ipsum?
          Ex.
        </h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quam
          officia fuga eius, doloribus ratione ipsam enim, assumenda perferendis
          dolore placeat harum labore provident, optio non nobis alias ipsum?
          Ex.
        </h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quam
          officia fuga eius, doloribus ratione ipsam enim, assumenda perferendis
          dolore placeat harum labore provident, optio non nobis alias ipsum?
          Ex.
        </h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quam
          officia fuga eius, doloribus ratione ipsam enim, assumenda perferendis
          dolore placeat harum labore provident, optio non nobis alias ipsum?
          Ex.
        </h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quam
          officia fuga eius, doloribus ratione ipsam enim, assumenda perferendis
          dolore placeat harum labore provident, optio non nobis alias ipsum?
          Ex.
        </h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quam
          officia fuga eius, doloribus ratione ipsam enim, assumenda perferendis
          dolore placeat harum labore provident, optio non nobis alias ipsum?
          Ex.
        </h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quam
          officia fuga eius, doloribus ratione ipsam enim, assumenda perferendis
          dolore placeat harum labore provident, optio non nobis alias ipsum?
          Ex.
        </h1>
      </CardContent>
      <Divider />
      <CardActions>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </CardActions>
    </Card>
  );
};
