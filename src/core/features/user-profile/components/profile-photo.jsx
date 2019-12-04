import React from "react";
import PropTypes from "prop-types";

import avatarPlaceholder from "../styles/images/avatar-placeholder.svg";

import "../styles/profile-photo.scss";

const ProfilePhoto = props => {
  const { photoUrl, className } = props;

  return (
    <img
      src={photoUrl || avatarPlaceholder}
      className={`profile-photo ${className}`}
      alt="avatar placeholder"
    />
  );
};

ProfilePhoto.propTypes = {
  photoUrl: PropTypes.string,
  className: PropTypes.string
};

export default ProfilePhoto;
