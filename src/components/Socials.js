import { Grid } from '@mui/material';
import React from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

const Socials = () => {
  const full = document.location.href;
  const { title } = document;

  return (
    <Grid container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row"
        spacing="1vh">
        <Grid item>
          <EmailShareButton url={full} subject={title}>
            <EmailIcon size={32} round />
          </EmailShareButton>
        </Grid>
        <Grid item>
          <FacebookShareButton url={full}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </Grid>
        <Grid item>
          <TelegramShareButton url={full} title={title}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </Grid>
        <Grid item>
          <TwitterShareButton url={full} title={title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </Grid>
        <Grid item>
          <WhatsappShareButton url={full} title={title} separator="—">
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Socials;
