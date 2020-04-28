import * as React from 'react';
import Gravatar from 'react-gravatar';

type Props = {
  email?: string;
};

const Avatar = ({ email = 'hello@getshifter.io' }: Props) => <Gravatar className="rounded-circle avatar" email={email} size={40} />;

export default Avatar;
