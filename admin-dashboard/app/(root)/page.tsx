'use client';

import { Modal } from '@/components/ui/modal';

const SetupPage = () => {
  return (
    <div className="p-4">
      <Modal title="test" descripton="test desc" isOpen onClose={() => {}}>
        Children
      </Modal>
    </div>
  );
};

export default SetupPage;
