import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-top: 2rem;
  padding: 2rem;
  border: 1px solid #ccc;
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
`;

const TextArea = styled.textarea`
  font-size: 1rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  background-color: #0074d9;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #0062ac;
  }
`;

const Ad = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [requirements, setRequirements] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Org Name: ${name}, Email: ${email}, Message: ${requirements}, Budget: ${budget}`);
    alert('Your message has been sent. Thank you!');
  };

  return (
    <FormWrapper>
      <p></p>
      <h2>List Your Ad!</h2>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Organization Name</Label>
        <Input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />

        <Label htmlFor="budget">Budget</Label>
        <Input type="text" id="budget" value={budget} onChange={(event) => setBudget(event.target.value)} />

        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />

        <Label htmlFor="requirements">Requirements</Label>
        <TextArea id="requirements" rows="4" value={requirements} onChange={(event) => setRequirements(event.target.value)} />

        <Button type="submit">Send Message</Button>
      </Form>
    </FormWrapper>
  );
};

export default Ad;