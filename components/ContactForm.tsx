"use client";
//import { addDoc, collection } from "@firebase/firestore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
//import { db } from "../utils/fireBaseConfig";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
//import Loader from "./Loader";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  nom: z.string().min(2, {
    message: "Veillez renseignez votre nom.",
  }),

  mail: z.string().email({
    message: "Veillez entrez une adresse mail valide.",
  }),

  sujet: z.string().min(2, {
    message: "Veillez renseignez votre sejut.",
  }),

  messages: z.string().min(20, {
    message: "minimum 20 caractères.",
  }),
});

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      mail: "",
      sujet: "",
      messages: "",
    },
  });

  //const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    form.reset();
    toast({
      description: "Merci de nous avoir contacté !",
    });
    /*try {
      setIsLoading(true);
      const docRef = await addDoc(collection(db, "contact"), {
        values,
      });
      values.nom = "";
      toast({
        description: "Merci de nous avoir contacté !",
      });
      setIsLoading(false);
      console.log(docRef);
    } catch (error) {
      setIsLoading(false);
      toast({
        description: "Une erreure est survenue, veillez reéssayer plutard !",
      });
    }*/
  }

  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="ml-auto space-y-4"
        >
          <FormField
            control={form.control}
            name="nom"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500"
                    placeholder="Nom"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mail"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    className="outline-bgcolor-3 bg-gray-100 focus:outline-bgcolor-3"
                    placeholder="Adresse e-mail"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sujet"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="outline-bgcolor-3 bg-gray-100 focus:outline-bgcolor-3"
                    placeholder="Sujet"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="messages"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-bgcolor-3"
                    placeholder="Sujet"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className=" bg-maincolor-1 text-white text-lg px-8 py-6 rounded-md hover:bg-indigo-700 transition"
            type="submit"
          >
            {<span>Envoyer</span>}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Contact;

/**
 *   

            <form class="ml-auto space-y-4">
                <input type='text' placeholder='Name'
                    class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
                <input type='email' placeholder='Email'
                    class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
                <input type='text' placeholder='Subject'
                    class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
                <textarea placeholder='Message' rows="6"
                    class="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"></textarea>
                <button type='button'
                    class="tex
 */
