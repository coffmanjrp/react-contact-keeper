import { useContext } from 'react';
import { ContactContext } from '../../context/contact';
import { ContactItem } from './';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;

  return (
    <>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </>
  );
};

export default Contacts;
