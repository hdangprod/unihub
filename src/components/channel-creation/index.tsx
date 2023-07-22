"use client";
import { useState } from "react";
import HeroIcon from "@/components/heroIcon";
import Modal from "@/components/modal";
import Input from "../input";
import { api } from "@/utils/api";
import { useRouter } from "next/navigation";

export default function ChannelCreation() {
  const createChannel = api.channelRouter.create.useMutation();

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    channelName: "",
    channelDescription: "",
  });

  const handleCreateRoom = () => {
    setIsOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const createdChannel = await createChannel.mutateAsync(formData);
    console.log(createdChannel);
    router.push(`/group/${createdChannel.id}`);
    setIsOpen(false);
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
          <form onSubmit={handleSubmit}>
            <div className="my-8 flex flex-col gap-6">
              <Input
                required
                value={formData.channelName}
                id="channelName"
                label="Input your channel name"
                className="w-full"
                onChange={handleChange}
              />
              <Input
                value={formData.channelDescription}
                id="channelDescription"
                label="Tell something about your channel"
                className="w-full"
                onChange={handleChange}
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
                type="submit"
                className="rounded-xl bg-sky-400 px-5 py-2 text-white transition-colors hover:bg-sky-500 hover:text-white"
              >
                Create Room
              </button>
            </div>
          </form>
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
