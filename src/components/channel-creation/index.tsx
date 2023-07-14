"use client";
import { useState } from "react";
import HeroIcon from "@/components/heroIcon";
import Modal from "@/components/modal";
import Input from "../input";

export default function ChannelCreation() {
  const [isOpen, setIsOpen] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [roomDescription, setRoomDescription] = useState("");

  const handleCreateRoom = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div className="p-4">
          <h1 className="mb-2 text-2xl font-semibold text-slate-500">
            Create your room
          </h1>
          <p className="mb-5 text-sm text-slate-400">
            How does your ideal study space look like? Define your space now.
          </p>
          <div className="my-8 flex flex-col gap-6">
            <Input
              value={roomName}
              id="roomName"
              label="Input your room name"
              className="w-full"
              onChange={(e) => {
                setRoomName(e.target.value);
              }}
            />
            <Input
              value={roomDescription}
              id="roomDescription"
              label="Tell something about your room"
              className="w-full"
              onChange={(e) => {
                setRoomDescription(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="rounded-xl px-5 py-2 text-sky-500 transition-colors hover:bg-sky-100"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="rounded-xl bg-sky-400 px-5 py-2 text-white transition-colors hover:bg-sky-500 hover:text-white"
            >
              Create Room
            </button>
          </div>
        </div>
      </Modal>
      <button
        onClick={handleCreateRoom}
        className=" flex items-center rounded-xl bg-sky-50 px-5 py-2.5 text-sky-500 transition-colors hover:bg-sky-400 hover:text-white"
      >
        <h1 className="font-medium">Create new channel</h1>
        <HeroIcon icon="plus" className="ml-2 h-5 w-5" />
      </button>
    </>
  );
}
