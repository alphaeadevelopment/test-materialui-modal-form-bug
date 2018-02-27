import React from "react";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import { FormControl } from "material-ui/Form";
import Select from "material-ui/Select";
import { MenuItem } from "material-ui/Menu";
import Input, { InputLabel } from "material-ui/Input";

const styles = {
  modalCtr: {
    position: "absolute",
    top: "25%",
    left: "12.5%",
    width: "75%",
    background: "white",
    padding: "1em"
  }
};
class Form extends React.Component {
  render() {
    const { classes, value, onChange } = this.props;
    return (
      <div className={classes.modalCtr}>
        <fieldset>
          <FormControl>
            <InputLabel>Choose</InputLabel>
            <Select
              type={"text"}
              value={value}
              onChange={onChange}
            >
              <MenuItem value={"a"}>A</MenuItem>
              <MenuItem value={"b"}>B</MenuItem>
              <MenuItem value={"c"}>C</MenuItem>
              <MenuItem value={"d"}>D</MenuItem>
            </Select>
          </FormControl>
        </fieldset>
      </div>
    );
  }
}
export default withStyles(styles)(Form);
