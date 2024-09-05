// // src/pages/Store.jsx
// import React from 'react';

// const Store = () => {
//   return (
//     <div>
//       <h1>Bem-vindo à Store</h1>
//     </div>
//   );
// };

// export default Store;

// DemoPage.jsx
import React, { useState } from 'react';
import Button from '../../components/ui-components/Button';
import Modal from '../../components/ui-components/popup-modal';
import Tooltip from '../..//components/ui-components/Tooltip';

const Store = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className="p-8 space-y-8 bg-yellow-300">
      {/* Button Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Button Component</h2>
        <Button variant="primary" onClick={toggleModal}>Open Modal</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="danger">Danger Button</Button>
      </section>

      {/* Modal Section */}
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <h2 className="text-xl font-bold">Modal Header</h2>
          <p>This is a modal body. You can place any content here.</p>
          <Button onClick={toggleModal}>Close</Button>
        </Modal>
      )}

      {/* Tooltip Section */}
      <section className="space-y-4 bg-red-600">
        <h2 className="text-xl font-bold">Tooltip Component</h2>
        <Tooltip content="This is a tooltip">
          <Button variant="info">Hover over me</Button>
        </Tooltip>
      </section>
    </div>
  );
};

export default Store;
