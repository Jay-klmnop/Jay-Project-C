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
    <div className='mb-4 flex w-52 flex-col items-center lg:m-0 lg:items-start'>
      <h1 className='text-base/loose font-semibold'>Services</h1>
      {serviceItems.map((item) => (
        <p key={item} className='text-sm/loose font-extralight'>
          {item}
        </p>
      ))}
    </div>
  );
}
