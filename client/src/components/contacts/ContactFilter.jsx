import { useContext, useEffect, useRef } from 'react';
import { ContactContext } from '../../context/contact';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filtered, filterContacts, clearFilter } = contactContext;
  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
    // eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <from>
      <input
        type="text"
        ref={text}
        placeholder="Filter Contacts..."
        onChange={onChange}
      />
    </from>
  );
};

export default ContactFilter;
