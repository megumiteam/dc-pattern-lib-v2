// @flow
import React from 'react';
import Gravatar from 'react-gravatar';

type Props = {
  email: string,
};

const Avatar = ({ email }: Props) => (
  <Gravatar className="rounded-circle" email={email} size={30} />
);

export default Avatar;
