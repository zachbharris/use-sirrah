import Link from 'next/link';

type Item = {
  type: 'item';
} & ItemProps | {
  type: 'header';
} & HeaderProps

const items: Item[] = [
  { type: 'header', title: 'Sections' },
  { type: 'item', content: 'FAQ', slug: 'faq' },
]

export default function SideNavigation() {
  return <aside className="h-[calc(100vh_-_3.5rem_-_1rem)] w-60 bg-neutral-100 fixed left-4 top-14 bottom-0 rounded-xl p-2 flex flex-col gap-2">
    {items.map((item, index) => {
      if (item.type === 'header') {
        return <Header key={index} title={item.title} />
      }
      return <Item key={index} content={item.content} slug={item.slug} />
    })}
  </aside>;
}

type HeaderProps = {
  title: string;
}

function Header({ title }: HeaderProps) {
  return <span className="font-medium text-neutral-600">{title}</span>
}

type ItemProps = {
  content: string | React.ReactNode;
  slug: string;
}

function Item({ content, slug }: ItemProps) {
  const href = `/components/${slug}`
  return <Link href={href} className="px-2 py-1 hover:bg-neutral-200 bg-transparent transition-colors rounded-lg text-sm">{content}</Link>
}
