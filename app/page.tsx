import GiftList from "@/components/ui/Gift";

export default function Home() {
  return (
    <main>
        <section className= 'flex items-center justify-center h-screen flex-col fondo '> 

        <div className="p-10 bg-zinc-50 ">
          <h1 className="text-5xl font-serif bold">Regalos: </h1>
          <GiftList/>       
        </div>

        </section>
    </main>
  );
}
