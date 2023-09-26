"use client";

import { useForm } from "react-hook-form";
import { SignUpProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { z } from "zod";
import { useAuthModal } from "@/hooks/use-auth-modal";
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
import { useRouter } from "next/navigation";

const formSchema = z.object({
	username: z.string().min(1),
	password: z.string().min(1),
	confirmPassword: z.string().min(1),
	role: z.string().min(1),
});

type SignUpFormValue = z.infer<typeof formSchema>;

interface SignUpFormProps {
	initialData: SignUpProps | null;
}

const roles = ["Doctor", "Nurse"];

const SingUpPage = () => {
	const setIsLogIn = useAuthModal((state) => state.setIsLogIn);
	const isLogIn = useAuthModal((state) => state.isLogIn);
	const router = useRouter();
	const [role, setRole] = useState("");

	const form = useForm<SignUpFormValue>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			password: "",
			confirmPassword: "",
			role: "",
		},
	});

	const onSubmit = async (data: SignUpFormValue) => {
		console.log(data);
		console.log(role.toLowerCase());
		router.push(`/${data.role.toLowerCase()}/1`);
	};

	return (
		<div className="max-w-lg px-2 py-10 bg-white rounded-md shadow-md">
			<div className="flex flex-col items-start justify-between space-y-">
				<Heading title="Sign Up" description="Please sign up to continue" />
			</div>
			<Separator className="my-5" />
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="w-full space-y-8"
				>
					<div className="grid grid-cols-2 gap-8 p-5">
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem className="col-span-2">
									<FormLabel className="">Username</FormLabel>
									<FormControl className="">
										<Input placeholder="Username or Email" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input placeholder="Password" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="confirmPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Label</FormLabel>
									<FormControl>
										<Input placeholder="Confirm Password" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="role"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Role</FormLabel>
									<Select
										onValueChange={field.onChange}
										value={field.value}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue
													defaultValue={field.value}
													placeholder="Select a Role"
												/>
											</SelectTrigger>
										</FormControl>

										<SelectContent>
											{roles.map((role, i) => (
												<SelectItem key={i} value={role}>
													{role}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="text-sm">
						Have an account?
						<Link href="/login" className="underline">
							Log In
						</Link>
					</div>
					<Button className="ml-auto" type="submit">
						Sign Up
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default SingUpPage;
