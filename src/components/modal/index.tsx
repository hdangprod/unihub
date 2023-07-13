import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface IModalProps {
  children: React.PropsWithChildren<React.ReactNode>;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ children, isOpen, onClose }: IModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // close modal on escape key
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => document.body.removeEventListener("keydown", closeOnEscapeKey);
  }, [onClose]);

  return mounted ? (
    <>
      {createPortal(
        <>
          {isOpen && (
            <div className="fixed inset-0 z-50 overflow-y-auto">
              <div className="flex min-h-screen items-center justify-center">
                <div className="fixed inset-0 transition-opacity">
                  <div
                    className="absolute inset-0 bg-black opacity-50"
                    onClick={onClose}
                  />
                </div>
                <div className="z-50 rounded-xl bg-white p-5">{children}</div>
              </div>
            </div>
          )}
        </>,
        document.body
      )}
    </>
  ) : //
  null;
}
