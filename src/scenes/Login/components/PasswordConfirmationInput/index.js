import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const PasswordConfirmationInput = ({ value, onChange }) => {
  return (
    <FormGroup className="PasswordConfirmationInput">
      <Label for="passwordConfirmation">Confirm Password</Label>
      <Input
        name="passwordConfirmation"
        type="password"
        placeholder="Re-Type Password"
        value={value}
        onChange={e => onChange(e.target.name, e.target.value)}
      />
    </FormGroup>
  );
};

export default PasswordConfirmationInput;
