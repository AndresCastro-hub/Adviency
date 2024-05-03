import GiftList from "@/components/ui/GiftList";


export default function Home() {
  return (
    <main>
        <section className= 'flex items-center justify-center h-screen flex-col '> 

        <div className="border-2 border-red-300 p-10">
          <h1 className="text-5xl font-serif bold">Regalos: </h1>
          <GiftList/>       
        </div>

        </section>
    </main>
  );
}
