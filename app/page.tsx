import FormWithReactHookForm from "@/components/form-with-react-hook-form";
import FormWithReactHookFormAndZod from "@/components/form-with-rhf-and-zod";
import FormWithReactHookFormAndZodAndServer from "@/components/form-with-rhf-and-zod-and-server";
import FormWithoutReactHookForm from "@/components/form-without-react-hook-form";
import { WithConditionalForm } from "@/components/with-conditional-form";
import WithReactHookDynamicForm from "@/components/with-react-hook-dynamic-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <WithReactHookDynamicForm /> */}
      <WithConditionalForm />
      {/* <FormWithoutReactHookForm /> */}
      {/* <FormWithReactHookForm /> */}
      {/* <FormWithReactHookFormAndZod /> */}
      {/* <FormWithReactHookFormAndZodAndServer /> */}
    </main>
  );
}
