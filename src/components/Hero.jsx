export default function Hero({ children ,link }) {
  return (
    <div className={`w-full  items-center justify-center text-white min-h-80 flex flex-col `} >
      {children}
    </div>
  );
}
