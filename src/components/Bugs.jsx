import React, { useEffect } from "react";
import { loadBugs, resolveBug, getUnresolvedBugs } from "./../store/bugs";
import { connect } from "react-redux";

const Bugs = (props) => {
  useEffect(() => {
    props.loadBugs();
  });

  return (
    <>
      <h2>Bugs</h2>
      <ul>
        {props.resolvedBugList.map((bug) => (
          <li key={bug.id}>
            {bug.description}{" "}
            <button onClick={()=>props.resolveBug(bug.id)}>Resolve</button>{" "}
          </li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => ({
  bugs: state.entities.bugs.list,
  resolvedBugList: getUnresolvedBugs(state),
});

const mapDispatchTpProps = (dispatch) => ({
  loadBugs: () => dispatch(loadBugs()),
  resolveBug: (id) => dispatch(resolveBug(id)),
});

export default connect(mapStateToProps, mapDispatchTpProps)(Bugs);
