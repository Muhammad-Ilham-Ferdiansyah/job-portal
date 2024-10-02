"use client"
import { FC } from "react";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { formApplySchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import UploadField from "../UploadField";
import { useSession } from "next-auth/react";
import { z } from "zod";
import { supabaseUploadFile } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

interface FormModalApplyProps {
    id: string | undefined;
    image: string | undefined;
    roles: string | undefined;
    location: string | undefined;
    jobType: string | undefined;
}
 
const FormModalApply: FC<FormModalApplyProps> = ({ id, image, roles, jobType, location }) => {
    const form = useForm<z.infer<typeof formApplySchema>>({
        resolver: zodResolver(formApplySchema),
    });

    const {toast} = useToast();

    const router = useRouter();

    const { data: session } = useSession();

    const onSubmit = async (val: z.infer<typeof formApplySchema>) => {
        try {
            const {filename, error} = await supabaseUploadFile(val.resume, 'applicant')

            const requestData = {
                userId: session?.user.id,
                jobId: id,
                resume: filename,
                coverLetter: val.coverLetter,
                linkedin: val.linkedIn,
                phone: val.phone,
                email: val.email,
                portfolio: val.portfolio,
                previousJobTitle: val.previousJobTitle,
            };

            if (error) {
                throw "Error";
            }

            console.log(requestData);

            await fetch('/api/job/apply', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(requestData)
            })

            await toast({
                title: "Success",
                description: "Apply Job Success"
            });

            router.replace('/');

        } catch (error) {
            console.log(error);
            toast({
                title: "Error",
                variant: "destructive",
                description: "Please Try Again Later"
            })
        }
    }

    return ( 
        <Dialog>
            <DialogTrigger asChild>
                {session ? (
                        <Button size="lg" className="text-lg px-12 py-6">
                            Apply
                        </Button>
                ) : (
                    <Button variant="outline" disabled>
                        Sign In First
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
                <div>
                    <div className="inline-flex items-center gap-4">
                        <div>
                            <Image src={image!!} alt={image!!} width={60} height={60} />
                        </div>
                        <div>
                            <div className="text-lg font-semibold">
                                {roles}
                            </div>
                            <div className="text-gray-500">
                                {location} . {jobType}
                            </div>
                        </div>
                    </div>
                    <Separator className="my-5" />
                    <div className="mb-5">
                        <div className="font-semibold text-lg">
                            Submit your application
                        </div>
                        <div className="text-gray-500 text-sm mt-2">
                            The following is required and will only be shared with Nomad
                        </div>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="fullname"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your full name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your phone number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="previousJobTitle"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Current of previous job title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="What's your previous job title" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <Separator />
                            <h2 className="font-semibold">LINKS</h2>
                            <div className="grid grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="linkedIn"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>LinkedIn URL</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Link LinkedIn URL" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="portfolio"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Portfolio URL</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Link Portfolio URL" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                    control={form.control}
                                    name="coverLetter"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Additional Information</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Add a cover letter or anything else want to share" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <UploadField form={form} />

                                <Button className="w-full">Apply</Button>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
     );
}
 
export default FormModalApply;