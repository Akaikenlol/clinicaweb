"use client";

import { useForm } from "react-hook-form";
import { LoginProps, SignUpProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { z } from "zod";
import { useAuthModal, useRoleModal } from "@/hooks/use-auth-modal";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import Heading from "@/components/ui/header";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const formSchema = z.object({
	username: z.string().min(1),
	password: z.string().min(1),
});

type LoginFormValue = z.infer<typeof formSchema>;

interface LoginFormProps {
	initialData: LoginProps | null;
}

const roles = ["Doctor", "Nurse"];

const SingUpPage = () => {
	const setIsLogIn = useAuthModal((state) => state.setIsLogIn);
	const isLogIn = useAuthModal((state) => state.isLogIn);
	const [role, setRole] = useState("");

	const form = useForm<LoginFormValue>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	const onSubmit = async (data: LoginFormValue) => {
		console.log(data);
		setRole("GGez");
		console.log(role);
	};

	return (
		<div className="w-full max-w-md px-2 py-10 bg-white rounded-md shadow-md">
			<div className="flex flex-col items-start justify-between space-y-">
				<Heading title="Login" description="Please login to continue" />
			</div>
			<Separator className="my-5" />
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
					<div className="grid grid-cols-2 gap-8">
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem className="col-span-2">
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input
											placeholder="Username or Email"
											{...field}
											onChange={(e) => setRole(e.target.value)}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem className="col-span-2">
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input placeholder="Password" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="text-sm">
						No account?
						<Link href="/signup" className="underline">
							Sign Up
						</Link>
					</div>

					<Button className="ml-auto" type="submit">
						Login
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default SingUpPage;
