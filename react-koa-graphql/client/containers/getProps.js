import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import allActionCreators from "actionCreators";

const actionCreatorRegex = /.+Actions$/;

function getPropNamesfromState(propNames, state) {
  const props = {};

  propNames.forEach((prop) => {
    if (actionCreatorRegex.test(prop)) return;
    props[prop] = state.get(prop);
  });

  return props;
}

function getPropNamesWithDispatch(propNames, dispatch) {
  const boundActionCreators = {};

  propNames.forEach((prop) => {
    if (!actionCreatorRegex.test(prop)) return;

    boundActionCreators[prop] = bindActionCreators(
      allActionCreators[prop],
      dispatch
    );
  });

  return boundActionCreators;
}

export default (...propNames) => (Component, includeRouter = true) => {
  const connectedComponent = connect(
    getPropNamesfromState.bind(null, propNames),
    getPropNamesWithDispatch.bind(null, propNames)
  )(Component);

  if (!includeRouter) return connectedComponent;
  return withRouter(connectedComponent);
};
