import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

export default function NotificationList() {
  const listNotification = JSON.parse(localStorage.getItem("notification"));
  const [DataNotif, setDataNotif] = useState(null);

  useEffect(() => {
    if (listNotification) {
      console.log("listNotification", listNotification);
    }
    // localStorage.removeItem("notification");
  }, []);

  if (listNotification) {
    return (
      <>
        {listNotification.map((item, index) => {
          return (
            <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
              <StyledPaper
                sx={{
                  my: 1,
                  mx: "auto",
                  p: 2,
                }}
              >
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar src="https://www.leparisien.fr/resizer/-juH-R4kBQ0_Bzhy2J2h6WeAlnY=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/BDA27JCVDVHE5OMQ3MGXW76SNU.jpg" />
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography noWrap>{item.title}</Typography>
                    <Typography noWrap>{item.body}</Typography>
                  </Grid>
                </Grid>
              </StyledPaper>
            </Box>
          );
        })}
      </>
    );
  }
}
