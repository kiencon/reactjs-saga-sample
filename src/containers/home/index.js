import React, { useEffect, useState } from 'react';
import {
  Button, Container, Form, Toast,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Cookies } from '../../utils';
import { logged, loginRequest } from './state/action';
import * as selector from './state/selector';

const Home = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { homeState, isLoading } = useSelector(state => ({
    homeState: selector.selectHomeState(state),
    isLoading: selector.selectIsLoading(state),
  }));

  useEffect(() => {
    const authToken = Cookies.get('authToken');
    if (authToken) {
      dispatch(logged({ authToken }));
    }
  }, [dispatch]);

  useEffect(() => {
    if (!homeState.isLogged && homeState.error) {
      setShow(true);
    }
  }, [homeState.error, homeState.isLogged]);

  const handleSubmitForm = e => {
    e.preventDefault();
    dispatch(loginRequest({ email, password }));
  };

  const HomePage = () => {
    if (homeState.isLogged) {
      return (
        <h1>
          Hello
          {' '}
          {homeState.fullName}
        </h1>
      );
    }
    return (
      <Container>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Login unsucessfully</strong>
          </Toast.Header>
          <Toast.Body>{homeState.error}</Toast.Body>
        </Toast>
        <Form onSubmit={e => handleSubmitForm(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We&apos;ll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {
              isLoading
                ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                : null
            }
            Submit
          </Button>
        </Form>
      </Container>
    );
  };

  return HomePage();
};

export default Home;
