"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface IAlertProps {
  content: string;
  isOpen: boolean;
  onClose: () => void;
}
export default function Alert({ content, isOpen, onClose }: IAlertProps) {
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

  useEffect(() => {
    //automatically close after 5 seconds
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return mounted ? (
    <>
      {createPortal(
        <>
          {isOpen && (
            <div className="fixed bottom-10 left-32 z-50">
              <div
                id="toast-simple"
                className="space-x flex w-full max-w-sm items-center space-x-4 divide-x divide-gray-200 rounded-xl border border-sky-100 bg-white p-4 text-gray-500 drop-shadow-sd2 "
                role="alert"
              >
                <svg
                  className="h-5 w-5 rotate-45 text-sky-600 dark:text-sky-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
                  />
                </svg>
                <div className="pl-4 text-sm font-normal">{content}</div>
              </div>
            </div>
          )}
        </>,
        document.body
      )}
    </>
  ) : null;
}
