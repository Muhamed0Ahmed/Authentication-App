"use client"
import * as z from "zod";

import {useForm} from "react-hook-form";

import {zodResolver} from "@hookform/resolvers/zod"

import { RegisterFormSchema } from "@/schemas";

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSucces } from "../form-success";
import { useState } from "react";
import { register } from "@/actions/register";

export const RegisterForm = () => {
    const [error, setError] = useState<string | undefined>('')
    const [success , setSuccess] = useState<string | undefined>("")
    const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver:zodResolver(RegisterFormSchema),
    defaultValues:{
        name:"",
        email:"",
        password:""
    }
    })

    const onSubmit = (values:z.infer<typeof RegisterFormSchema>) => {
        register(values)
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
                        name='name'
                        render={
                            ({field} ) => (
                                <FormItem >
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                      <Input {...field} placeholder="Admin" type="text"/>  
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )
                        }
                       >
                        </FormField> 
                        <FormField 
                        control={form.control}
                        name='email'
                        render={
                            ({field} ) => (
                                <FormItem >
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                      <Input {...field} placeholder="admin@gmail.com" type="email"/>  
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
                                      type="password"
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
                        Create an account
                    </Button>
                    
                </form>
            </Form>
        </div>
    )
}