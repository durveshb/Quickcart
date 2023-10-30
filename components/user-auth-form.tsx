"use client";

import { UserAuthSchema } from "@/lib/validation/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Alert, AlertTitle } from "./ui/alert";
import { Icons } from "./icons";
import { signIn } from "next-auth/react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  invalidCred?: boolean;
}
type FormData = z.infer<typeof UserAuthSchema>;

const UserAuthForm = ({
  className,
  invalidCred,
  ...props
}: UserAuthFormProps) => {
  const form = useForm<FormData>({
    resolver: zodResolver(UserAuthSchema),
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: FormData) => {
    setLoading(true);
    await signIn("credentials", {
      username: values.username,
      password: values.password,
      redirect: true,
      callbackUrl: "/dashboard",
    });
    setLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[90%] max-w-[300px] space-y-3"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="username" {...field} disabled={loading} />
              </FormControl>
              <FormMessage className="!mt-1 text-right mr-1 text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="password"
                  type="password"
                  {...field}
                  disabled={loading}
                />
              </FormControl>
              <FormMessage className="!mt-1 text-right mr-1 text-xs" />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={loading}>
          Login
        </Button>
        {invalidCred && (
          <Alert variant={"destructive"}>
            <Icons.warning size={16} />
            <AlertTitle>Invalid Credentials</AlertTitle>
          </Alert>
        )}
      </form>
    </Form>
  );
};

export default UserAuthForm;
