import { IconButton, Link } from '@material-ui/core';

import React from 'react';
import contacts from '../../data/contact';

const ContactIcons = () => {
  return (
    <>
      {contacts.map((contact) => (
        <Link key={contact.label} href={contact.link} target="_blank">
          <IconButton>{contact.icon}</IconButton>
        </Link>
      ))}
    </>
  );
};

export default ContactIcons;
