import React from "react"
import {
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  FacebookShareButton,
  RedditIcon,
  RedditShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PocketIcon,
  PocketShareButton,
} from "react-share"

import shareboxStyles from "./sharePanel.module.scss"

const SharePanel = ({ imageurl, imagealt, url, title, source, summary }) => {
  return (
    <div className={shareboxStyles.sharebox}>
      <div className={shareboxStyles.shareboxtitle}>SHARE</div>

      <EmailShareButton
        className={shareboxStyles.shareboxsocial}
        imageAlt={imagealt}
        imageUrl={imageurl}
        url={url}
        source={source}
        title={title}
        quote={summary}
        summary={summary}
        subject={title}
      >
        <EmailIcon></EmailIcon>
      </EmailShareButton>
      <TwitterShareButton
        className={shareboxStyles.shareboxsocial}
        imageAlt={imagealt}
        imageUrl={imageurl}
        url={url}
        source={source}
        title={title}
        quote={summary}
        summary={summary}
        subject={title}
      >
        <TwitterIcon></TwitterIcon>
      </TwitterShareButton>
      <FacebookShareButton
        className={shareboxStyles.shareboxsocial}
        imageAlt={imagealt}
        imageUrl={imageurl}
        url={url}
        source={source}
        title={title}
        quote={summary}
        summary={summary}
        subject={title}
      >
        <FacebookIcon></FacebookIcon>
      </FacebookShareButton>
      <RedditShareButton
        className={shareboxStyles.shareboxsocial}
        imageAlt={imagealt}
        imageUrl={imageurl}
        url={url}
        source={source}
        title={title}
        quote={summary}
        summary={summary}
        subject={title}
      >
        <RedditIcon></RedditIcon>
      </RedditShareButton>
      <LinkedinShareButton
        className={shareboxStyles.shareboxsocial}
        imageAlt={imagealt}
        imageUrl={imageurl}
        url={url}
        source={source}
        title={title}
        quote={summary}
        summary={summary}
        subject={title}
      >
        <LinkedinIcon></LinkedinIcon>
      </LinkedinShareButton>
      <PocketShareButton
        className={shareboxStyles.shareboxsocial}
        imageAlt={imagealt}
        imageUrl={imageurl}
        url={url}
        source={source}
        title={title}
        quote={summary}
        summary={summary}
        subject={title}
      >
        <PocketIcon></PocketIcon>
      </PocketShareButton>
    </div>
  )
}

export default SharePanel
