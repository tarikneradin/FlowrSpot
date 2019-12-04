import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  markFlowerAsFavorite,
  deleteFlowerFromFavorites
} from "../actions/flowers-actions";

import "../styles/flowers-grid-item.scss";
import star from "../styles/images/star.svg";
import starFavourite from "../styles/images/star-favourite.svg";

export const FlowersGridItem = props => {
  const {
    flower,
    loggedIn,
    markFlowerAsFavorite,
    deleteFlowerFromFavorites
  } = props;

  return (
    <div
      className="flowers-grid-item"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.7) 89.5%), url(${flower.profile_picture})`
      }}
    >
      {loggedIn && (
        <img
          onClick={() =>
            flower.favorite
              ? deleteFlowerFromFavorites(flower.id)
              : markFlowerAsFavorite(flower.id)
          }
          className={`flowers-grid-item__favourite ${
            flower.favorite ? "favorite" : ""
          }`}
          src={flower.favorite ? starFavourite : star}
          alt=""
        />
      )}
      <p className="flowers-grid-item__name"> {flower.name} </p>
      <p className="flowers-grid-item__latin-name"> {flower.latin_name} </p>
      <p
        className={`flowers-grid-item__sightings ${
          flower.favorite ? "favorite" : ""
        }`}
      >
        {flower.sightings} sightings
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.login.loggedIn
});

const mapDispatchToProps = dispatch => ({
  markFlowerAsFavorite: data => {
    dispatch(markFlowerAsFavorite(data));
  },
  deleteFlowerFromFavorites: data => {
    dispatch(deleteFlowerFromFavorites(data));
  }
});

FlowersGridItem.propTypes = {
  loggedIn: PropTypes.bool,
  flower: PropTypes.object.isRequired,
  markFlowerAsFavorite: PropTypes.func,
  deleteFlowerFromFavorites: PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(FlowersGridItem);
