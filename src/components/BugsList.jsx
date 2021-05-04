import React, { useEffect } from "react";
import { loadBugs, getUnresolvedBugs, resolveBug } from "./../store/bugs";
import { useDispatch, useSelector } from "react-redux";

const BugsList = () => {
  const dispatch = useDispatch();
  const bugs = useSelector((state) => state.entities.bugs.list);
    const resolvedBugs = useSelector(getUnresolvedBugs);

  useEffect(() => {
    dispatch(loadBugs());
  }, []);

  return (
    <>
      <h2>Bugs</h2>
      <ul>
        {resolvedBugs.map((bug) => (
          <li key={bug.id}>
            {bug.description}{" "}
            <button onClick={() => dispatch(resolveBug(bug.id))}>Resolve</button>{" "}
          </li>
        ))}
      </ul>
    </>
  );
};

export default BugsList;
