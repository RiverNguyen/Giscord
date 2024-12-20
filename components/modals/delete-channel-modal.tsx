"use client";

import axios from "axios";
import qs from "query-string";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

import { useModal } from "@/hooks/use-modal-store";
import { useRouter } from "next/navigation";

export const DeleteChannelModal = () => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const { isOpen, onClose, type, data } = useModal();

	const isModalOpen = isOpen && type === "deleteChannel";
	const { server, channel } = data;

	const onClick = async () => {
		try {
			setIsLoading(true);
			const url = qs.stringifyUrl({
				query: {
					serverId: server?.id,
				},
				url: `/api/channels/${channel?.id}`,
			});
			await axios.delete(`${url}`);
			onClose();

			router.push(`/servers/${server?.id}`);
			router.refresh();
		} catch (error) {
			console.log("[ERROR_DELETE_CHANNEL]", error);
		} finally {
			setIsLoading(false);
			onClose();
		}
	};

	return (
		<Dialog open={isModalOpen} onOpenChange={onClose}>
			<DialogContent className="bg-white text-black p-0 overflow-hidden">
				<DialogHeader className="pt-8 px-6">
					<DialogTitle className="text-2xl text-center font-bold text-rose-500">
						Delete Channel
					</DialogTitle>
					<DialogDescription className="text-center text-zinc-500">
						Are you sure you want to delete the channel?
						<br/>
						<span className="font-semibold text-indigo-500">
              #{channel?.name} {""}
            </span>
						will be permanently deleted.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className="bg-gray-100 px-6 py-4">
					<div className="flex items-center justify-between w-full">
						<Button
							disabled={isLoading}
							onClick={onClose}
							variant={"ghost"}
							className="focus-visible:ring-0 focus-visible:ring-offset-0"
						>
							Cancel
						</Button>
						<Button disabled={isLoading} variant={"primary"} onClick={onClick}>
							Confirm
						</Button>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
