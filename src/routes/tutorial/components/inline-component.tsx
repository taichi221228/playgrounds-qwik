import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <main>
      <Greeter />
    </main>
  );
});

export const Greeter = () => {
  return <div>Hello World!</div>;
};
