interface FooterLinkGroupProps {
  title: string;
  items: string[];
}

export default function FooterLinkGroup({ title, items }: FooterLinkGroupProps) {
  return (
    <div className='mb-4 flex w-52 flex-col items-center lg:m-0 lg:items-start'>
      <h1 className='text-base/loose font-semibold'>{title}</h1>
      {items.map((item) => (
        <p key={item} className='text-sm/loose font-extralight'>
          {item}
        </p>
      ))}
    </div>
  );
}
