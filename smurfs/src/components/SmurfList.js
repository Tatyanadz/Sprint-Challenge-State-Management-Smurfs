import React, { useEffect } from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";
import { getSmurfs } from "../actions/getSmurfs";

const SmurfList = props => {
  useEffect(() => {
    props.getSmurfs();
  });

  return (
    <div>
      {props.isFetching && <p>Fetching your Smurfs...</p>}
      {props.error && <p>{props.error}</p>}
      {props.smurfs.map(item => (
        <Smurf
          key={item.id}
          name={item.name}
          age={item.age}
          height={item.height}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { getSmurfs })(SmurfList);