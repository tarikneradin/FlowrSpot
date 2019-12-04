import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getFlowers } from "../actions/flowers-actions";
import FlowersGridItem from "./flowers-grid-item";
import Loader from "../../loader/components/loader";

import "../styles/flowers-grid.scss";

const FlowersGrid = props => {
  const { getFlowersInProgress, flowers, pagination } = props;

  useEffect(() => {
    const { getFlowers } = props;

    getFlowers(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if ((!flowers.length && getFlowersInProgress) || !pagination) {
    return <Loader />;
  }

  const getMoreFlowers = () => {
    const { getFlowers } = props;

    getFlowers(pagination.next_page);
  };

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={getMoreFlowers}
      className="flowers-grid"
      hasMore={pagination.total_pages > pagination.current_page}
      loader={<Loader />}
    >
      {flowers.map((item, index) => (
        <FlowersGridItem key={index} flower={item} />
      ))}
    </InfiniteScroll>
  );
};

const mapStateToProps = state => ({
  flowers: state.flowers.list,
  pagination: state.flowers.meta && state.flowers.meta.pagination,
  getFlowersInProgress: state.flowers.getFlowersInProgress,
  loggedIn: state.login.loggedIn
});

const mapDispatchToProps = dispatch => ({
  getFlowers: page => {
    dispatch(getFlowers(page));
  }
});

FlowersGrid.propTypes = {
  flowers: PropTypes.array,
  pagination: PropTypes.object,
  getFlowersInProgress: PropTypes.bool,
  loggedIn: PropTypes.bool,
  getFlowers: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowersGrid);
