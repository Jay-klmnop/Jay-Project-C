export default function FooterAssistance() {
  const assistanceItems = [
    `Find an order`,
    `Terms of delivery`,
    `Exchange and return of goods`,
    `Guarantee`,
    `Frequently asked questions`,
    `Terms of use of the site`,
  ];

  return (
    <div className="w-52 flex flex-col items-center mb-4 lg:items-start lg:m-0">
      <h1 className="font-semibold text-base/loose">Assistance</h1>
      {assistanceItems.map((item) => (
        <p key={item} className="font-extralight text-sm/loose">
          {item}
        </p>
      ))}
    </div>
  );
}
