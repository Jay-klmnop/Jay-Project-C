export default function FooterServices() {
  const serviceItems = [
    `Bonus program`,
    `Gift cards`,
    `Credit and payment`,
    `Service contracts`,
    `Non-cash account`,
    `Payment`,
  ];
  return (
    <div className="w-52 flex flex-col items-center mb-4 lg:items-start lg:m-0">
      <h1 className="font-semibold text-base/loose">Services</h1>
      {serviceItems.map((item) => (
        <p key={item} className="font-extralight text-sm/loose">
          {item}
        </p>
      ))}
    </div>
  );
}
