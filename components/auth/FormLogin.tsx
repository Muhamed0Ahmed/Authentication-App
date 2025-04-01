"use client"
import * as z from "zod";

import {useForm} from "react-hook-form";

import {zodResolver} from "@hookform/resolvers/zod"

import { LoginFormSchema } from "@/schemas";

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSucces } from "../form-success";
import { login } from "@/actions/login";
import { useState } from "react";

export const LoginForm = () => {
    const [error, setError] = useState<string | undefined>('')
    const [success , setSuccess] = useState<string | undefined>("")
    const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver:zodResolver(LoginFormSchema),
    defaultValues:{
        email:"",
        password:""
    }
    })

    const onSubmit = (values:z.infer<typeof LoginFormSchema>) => {
        login(values)
        .then((data) => {
            setError(data.error);
            setSuccess(data.success || "")
        })

    }
    return (
        <div>
            <Form {...form}>
                <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
                >
                    <div className="space-y-4">
                       <FormField 
                        control={form.control}
                        name='email'
                        render={
                            ({field} ) => (
                                <FormItem >
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                      <Input {...field} placeholder="admin@gmail.com" type="text"/>  
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )
                        }
                       >
                        </FormField> 

                        
                       <FormField 
                        control={form.control}
                        name='password'
                        render={
                            ({field} ) => (
                                <FormItem >
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                      <Input
                                      {...field}
                                      placeholder="123456"
                                      type='password'
                                      />  
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )
                        }
                       >
                        
                        </FormField> 

                    
                    </div>
                    <FormError message={error}/>
                    <FormSucces message={success}/>
                    <Button
                    type="submit"
                    className="w-full"
                    >
                        Login
                    </Button>
                    
                </form>
            </Form>
        </div>
    )
}