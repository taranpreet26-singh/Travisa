import React from 'react';

const GoogleMap = () => {
  return (
    <div className='p-10 '>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d252.0550655898631!2d75.58737146589714!3d31.306206714033507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1738511919369!5m2!1sen!2sin"
        width="100%" // Make it responsive
        height="450"
        className='rounded-xl'
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMap;
