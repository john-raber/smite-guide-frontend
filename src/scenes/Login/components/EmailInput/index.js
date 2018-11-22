import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const EmailInput = ({ value, onChange }) => {
  return (
    <FormGroup>
      <Label for="email">Email</Label>
      <Input
        name="email"
        value={value}
        onChange={e => onChange(e.target.name, e.target.value)}
      />
    </FormGroup>
  );
};

export default EmailInput;
