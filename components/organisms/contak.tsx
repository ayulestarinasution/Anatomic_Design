
export default function Contak({customClass,size, padding, weight, background, color, margin, border, value}){
    return (
    <section className="py-28-bg-kontak">
<div className="container-mx-auto">
<div className="flex">
    <div className="w-4/12">
    <div className="bg-white shadow-skill rounded-lg p-6 flex item-center">
        <img src="/homepage/Ellipse 6.png" className="rounded-full w-16 mr-6" />
    </div>
    <h4 className="text-lg font-semibold">Email</h4>
    <p className="text-sm text-gray-400 font-semibold mt-1">contact@flex.co</p>
</div>
   </div>
   </div>
   </section>
    );
}