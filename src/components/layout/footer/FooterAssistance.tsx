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
    <div className='mb-4 flex w-52 flex-col items-center lg:m-0 lg:items-start'>
      <h1 className='text-base/loose font-semibold'>Assistance</h1>
      {assistanceItems.map((item) => (
        <p key={item} className='text-sm/loose font-extralight'>
          {item}
        </p>
      ))}
    </div>
  );
}
