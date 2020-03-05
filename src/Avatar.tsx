import React from 'react';
import Gravatar from 'react-gravatar';

type Props = {
  email?: string;
};

const Avatar = ({ email }: Props) => {
  if (!email) return null;
  return <Gravatar className="rounded-circle avatar" email={email} size={40} />;
};

export default Avatar;
