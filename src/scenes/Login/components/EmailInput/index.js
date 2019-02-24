import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const EmailInput = ({ value, onChange }) => {
  return (
    <FormGroup className="EmailInput">
      <Label for="email">Email</Label>
      <Input
        className="login-email"
        name="email"
        type="email"
        value={value}
        onChange={e => onChange(e.target.name, e.target.value)}
      />
    </FormGroup>
  );
};

export default EmailInput;
