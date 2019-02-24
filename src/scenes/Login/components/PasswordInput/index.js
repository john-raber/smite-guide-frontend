import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const PasswordInput = ({ value, onChange }) => {
  return (
    <FormGroup className="PasswordInput">
      <Label for="password">Password</Label>
      <Input
        className="login-password"
        name="password"
        type="password"
        value={value}
        onChange={e => onChange(e.target.name, e.target.value)}
      />
    </FormGroup>
  );
};

export default PasswordInput;
