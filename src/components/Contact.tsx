"use client";
import { sendEmail } from "@/lib/send-email";
import { TContactSchema, contactSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { HeartPulse } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (formData: TContactSchema) => {
    const { data, error } = await sendEmail(formData);
    if (error) {
      toast.error(error);
      return;
    }
    toast.success("Email sent successfully");
    reset();
  };

  return (
    <section
      className="mx-auto mt-12 flex scroll-mt-28 flex-col items-center sm:min-w-[30rem]"
      id="contact"
    >
      <HeartPulse className="h-12 w-12 text-muted-foreground" />
      <h2 className="mb-2 text-2xl font-semibold">Contact</h2>

      <p className=" -mt-1  text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:hi@cliffrc.nl">
          hi@cliffrc.nl
        </a>{" "}
        or through this form.
      </p>

      {/* <!-- The FORM --> */}
      <form
        className="mt-10 flex flex-col text-sm sm:mx-10 sm:min-w-[48ch]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("firstName")}
          className="borderBlack h-14 rounded-lg px-4"
          type="text"
          placeholder="First Name"
          maxLength={50}
        />
        <input
          {...register("senderEmail")}
          className="borderBlack my-3 h-14 rounded-lg px-4"
          type="email"
          placeholder="Email"
        />
        <textarea
          {...register("message")}
          className="borderBlack my-3 h-52 rounded-lg p-4"
          placeholder="Your message ..."
        />
        <button
          type="submit"
          className="disabled:bg-opacity-65 dark:bg-opacity-65 group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 disabled:scale-100 dark:bg-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
          ) : (
            <>
              Submit{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />{" "}
            </>
          )}
        </button>
      </form>
    </section>
  );
};

export default Contact;
