import React from "react";
import PropTypes from "prop-types";

const ProfileComponent = (props) => {
  // const { fullName, bio, profession, nameAlert } = props;
  return (
    <div style={{ margin: "2% 2%" }}>
      {props.nameAlert()}

      {props.children}
      <h2 style={{ textTransform: "capitalize", textDecoration: "underline" }}>
        {props.fullName}
      </h2>

      <p
        style={{
          fontFamily: "Arial,sans-serif",
          fontSize: "0.9em",
          color: "grey"
        }}
      >
        {props.bio}
      </p>
      <h3
        style={{
          fontFamily: "'Times New Roman', Times, serif",
          fontSize: "0.7em",
          color: "blue"
        }}
      >
        My Profession : {props.profession}
      </h3>
    </div>
  );
};
ProfileComponent.defaultProps = {
  bio: "Information",
  profession: "None"
};

ProfileComponent.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  nameAlert: PropTypes.func.isRequired
};
export default ProfileComponent;
