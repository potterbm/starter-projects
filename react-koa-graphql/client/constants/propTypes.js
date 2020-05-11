import ImmutablePropTypes from "react-immutable-proptypes";
import PropTypes from "prop-types";

export const ISODatetime = PropTypes.string;

export const actions = PropTypes.objectOf(PropTypes.func).isRequired;

/*
match and history are both props passed by react router
*/
export const match = PropTypes.shape({
  params: PropTypes.shape({
    id: PropTypes.string,
  }),
});

export const history = PropTypes.shape({
  go: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  replace: PropTypes.func.isRequired,
}).isRequired;

export const player = ImmutablePropTypes.contains({
  created: ISODatetime,
  firstName: PropTypes.string,
  // The GraphQL specification requires that ID scalar types are serialized as strings
  id: PropTypes.string.isRequired,
  lastName: PropTypes.string,
  photo: PropTypes.string,
  winnings: PropTypes.number,
});

export const players = ImmutablePropTypes.listOf(player);

export const playerState = ImmutablePropTypes.contains({
  areLoading: PropTypes.bool.isRequired,
  loaded: players.isRequired,
});
